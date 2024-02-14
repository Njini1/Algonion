package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.exception.SolvedProblemNotFoundException;
import com.e1i5.backend.domain.problem.model.entity.AlgoGroup;
import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.repository.ProblemRepository;
import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemDetailResponse;
import com.e1i5.backend.domain.problem.response.SolvedProblemListResponse;
import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.exception.UserNotFoundException;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import com.e1i5.backend.domain.user.service.DashboardService;
import com.e1i5.backend.global.error.GlobalErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class SolvedProblemServiceImpl implements SolvedProblemService {
    

    @Autowired
    SolvedProblemRepository solvedProblemRepo;
    @Autowired
    ProblemRepository problemRepo;
    @Autowired
    ProblemService problemService;
    @Autowired
    DashboardService dashboardService;
    @Autowired
    AuthRepository authRepo;

    private static final int PAGE_SIZE = 20;

    /**
     * 사용자가 푼 문제 저장하는 메서드
     * : 푼 문제가 problem T에 존재하는 지 확인 후
     * -> 없다면 problem T에 추가
     * : solved T에서 이미 해당 제출 번호가 있는 지 확인 후(백준)
     * -> 없다면 solved T에 저장
     *
     * @param solvedProblemReq 사용자가 푼 문제 데이터
     * @param siteName         문제 푼 사이트
     */
    @Transactional
    @Override
    public void saveBOJSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName, int userId) {
        int oldAlgoScore = problemService.getOldAlgoScore(solvedProblemReq.getProblemNum(), siteName);
        // 임시방편 코드
        if (solvedProblemReq.getProblemLevel() == null) {
//            solvedProblemReq.isNullUpateLevel("0");
//            solvedProblemReq = getUpdatedSolvedProblemRequest(solvedProblemReq.getProblemNum());
        }
        System.out.println("solvedProblemReq" + solvedProblemReq);

        Problem problem = problemService.saveOrUpdateProblem(solvedProblemReq.toProblemEntity(), siteName, null);

        solvedProblemRepo.findBySubmissionId(solvedProblemReq.getSubmissionId())
                .ifPresentOrElse( //TODO orElseGet으로?
                        solvedProblem -> {
                            log.info("ProblemServiceImpl saveSolvedProblem already exist solvedProblem");
                        },
                        () -> saveSolvedProblem(solvedProblemReq, userId, problem, oldAlgoScore)
                );
    }

    @Transactional
    @Override
    public void saveNotBOJSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName, int userId) {
        int oldAlgoScore = problemService.getOldAlgoScore(solvedProblemReq.getProblemNum(), siteName);
        Problem problem = problemService.saveOrUpdateProblem(solvedProblemReq.toProblemEntity(), siteName, solvedProblemReq.getProblemCategories());

        saveSolvedProblem(solvedProblemReq, userId, problem, oldAlgoScore);
    }

    /**
     * 사용자가 푼 문제 데이터를 solved_problem table에 저장하는 메서드
     *
     * @param solvedProblemReq 사용자가 문제 푼 데이터
     * @param userId             사용자 정보
     * @param problem          문제 정보
     */
    @Override
    public void saveSolvedProblem(SolvedProblemRequest solvedProblemReq, int userId, Problem problem, int oldAlgoScore) {
        User user = authRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(GlobalErrorCode.USER_NOT_FOUND));

        SolvedProblem solvedProblemEntity = solvedProblemReq.toSolvedProblemEntity();
        solvedProblemEntity.updateUserAndProblem(user, problem);
        dashboardService.updateUserScore(userId, problem.getProblemId(), oldAlgoScore);
        solvedProblemRepo.save(solvedProblemEntity);
    }

    /**
     * 사용자가 문제 푼 데이터에서 메모 수정
     * @param solvedProblemId  수정할 문제 인덱스
     * @param memo 수정할 문제 메모
     */
    @Transactional
    @Override
    public SolvedProblemDetailResponse updateSolvedProblem(int userId, int solvedProblemId, String memo) {

        SolvedProblem solvedProblem = checkAuth(userId, solvedProblemId);

        solvedProblem.updateMemo(memo);
        SolvedProblem saveProblem = solvedProblemRepo.save(solvedProblem);

        return SolvedProblemDetailResponse.builder()
                .solvedProblem(saveProblem).build();
    }

    /**
     * 사용자가 문제 푼 데이터에서 visible 수정
     * @param solvedProblemId  수정할 문제 인덱스
     */
    @Transactional
    @Override
    public SolvedProblemDetailResponse updateVisibility(int userId, int solvedProblemId) {
        //TODO 추후 상태코드로 변경, checkAuth 로직 추가
        SolvedProblem solvedProblem = solvedProblemRepo.findById(solvedProblemId)
                .orElseThrow(() -> new SolvedProblemNotFoundException("사용자가 푼 문제 데이터를 찾지 못함"));

        solvedProblem.updateVisible(!solvedProblem.isVisible());
        SolvedProblem saveProblem = solvedProblemRepo.save(solvedProblem);
        return SolvedProblemDetailResponse.builder()
                .solvedProblem(saveProblem).build();
    }

    /**
     * 사용자가 푼 문제 리스트 반환하는 함수
     *
     * @return 사용자가 푼 문제 리스트
     */
    @Override
    public List<SolvedProblemListResponse> getSolvedProblemListByUser(String nickname, int pageNum) {

        Pageable pageable = PageRequest.of(pageNum, PAGE_SIZE);

        List<SolvedProblemListResponse> solvedProblemList = new ArrayList<>();
        Page<SolvedProblem> solvedProblemListEntity = solvedProblemRepo.findAllByUser_NicknameAndVisible(nickname, true, pageable);

        if (solvedProblemListEntity.isEmpty()) return solvedProblemList;

        for (SolvedProblem solvedProblem : solvedProblemListEntity.getContent()) {
            // 분류 값 배열 추가
            List<AlgoGroup> algoGroups = solvedProblem.getProblem().getAlgoGroup();
            List<String> classifications = algoGroups.stream()
                    .map(AlgoGroup::getClassification)
                    .collect(Collectors.toList());

            // 분류 값 문자열 추가
            StringBuilder strClassificationBuilder = new StringBuilder();
            for (String classification : classifications) {
                strClassificationBuilder.append(classification).append(", "); // '.'을 붙여 문자열 연결
            }
            if (!classifications.isEmpty()) {
                strClassificationBuilder.deleteCharAt(strClassificationBuilder.length() - 2); // 마지막 '.' 제거
            }

            String strClassification = strClassificationBuilder.toString(); // 최종 문자열 얻기

            SolvedProblemListResponse solvedProblemListResponse = SolvedProblemListResponse.builder()
                    .solvedProblem(solvedProblem)
                    .classification(classifications)
                    .strClassification(strClassification)
                    .build();
            solvedProblemList.add(solvedProblemListResponse);
        }

        return solvedProblemList;
    }

    /**
     * 사용자가 푼 문제 상세 조회
     * @param solvedProblemId 조회할 문제 인덱스
     * @return 사용자가 푼 데이터와 문제 데이터
     */
    @Override
    public SolvedProblemDetailResponse getSolvedProblemDetail(int solvedProblemId) {

        SolvedProblem solvedProblem = solvedProblemRepo.findById(solvedProblemId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected solvedProblem"));

        return SolvedProblemDetailResponse.builder()
                .solvedProblem(solvedProblem).build();
    }

    /**
     * 페이지 네이션 사이즈
     * @param nickname
     * @return
     */
    @Override
    public int countUserSolvedProblem(String nickname) {
        return solvedProblemRepo.countVisibleSolvedProblemsByUserNickname(nickname);
    }

    public SolvedProblem checkAuth(int userId, int solvedProblemId) {
        SolvedProblem solvedProblem = solvedProblemRepo.findById(solvedProblemId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected solvedProblem"));

        if (solvedProblem.getUser().getUserId() == userId) return solvedProblem;
        else throw new IllegalArgumentException("Unexpected writer");
    }
}
