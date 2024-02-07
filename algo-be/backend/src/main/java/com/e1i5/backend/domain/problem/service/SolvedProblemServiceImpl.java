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
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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
    AuthRepository authRepo;

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
        //TODO 사용자 정보 추가
        //TODO submissionId로 제출 여부를 먼저 검사 후 문제 저장으로 변경

        System.out.println("백준 레벨 2222: " + solvedProblemReq.getProblemLevel());
        // 임시방편 코드
        if (solvedProblemReq.getProblemLevel() == null) {
            solvedProblemReq.isNullUpateLevel("0");
        }

        Problem problem = problemService.saveOrUpdateProblem(solvedProblemReq.toProblemEntity(), siteName);
        solvedProblemRepo.findBySubmissionId(solvedProblemReq.getSubmissionId())
                .ifPresentOrElse( //TODO orElseGet으로?
                        solvedProblem -> {
                            log.info("ProblemServiceImpl saveSolvedProblem already exist solvedProblem");
                            System.out.println("이미 푼 문제가 존재");
                        },
                        () -> saveSolvedProblem(solvedProblemReq, userId, problem)
                );
    }

    @Transactional
    @Override
    public void saveNotBOJSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName, int userId) {
        //TODO 사용자 정보 추가
        Problem problem = problemService.saveOrUpdateProblem(solvedProblemReq.toProblemEntity(), siteName);

        saveSolvedProblem(solvedProblemReq, userId, problem);
    }

    /**
     * 사용자가 푼 문제 데이터를 solved_problem table에 저장하는 메서드
     *
     * @param solvedProblemReq 사용자가 문제 푼 데이터
     * @param userId             사용자 정보
     * @param problem          문제 정보
     */
    @Override
    public void saveSolvedProblem(SolvedProblemRequest solvedProblemReq, int userId, Problem problem) {
        //TODO 문제번호 비교해서 점수 더하는 거도 추가해줘
        //TODO solvedProblemReq말고 Entity로 바꾼 값으로 매개변수 받는 거로 변경? 고민
        User user = authRepo.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));

        SolvedProblem solvedProblemEntity = solvedProblemReq.toSolvedProblemEntity();
        solvedProblemEntity.updateUserAndProblem(user, problem);
        solvedProblemRepo.save(solvedProblemEntity);
    }

    /**
     * 사용자가 문제 푼 데이터에서 메모 수정
     * @param solvedProblemId  수정할 문제 인덱스
     * @param memo 수정할 문제 메모
     */
    @Transactional
    @Override
    public SolvedProblemDetailResponse updateSolvedProblem(int solvedProblemId, String memo) {

        SolvedProblem solvedProblem = solvedProblemRepo.findById(solvedProblemId)
                .orElseThrow(() -> new SolvedProblemNotFoundException("사용자가 푼 문제 데이터를 찾지 못함")); //TODO 추후 상태코드로 변경

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
    public SolvedProblemDetailResponse updateVisibility(int solvedProblemId) {
        //TODO 추후 상태코드로 변경
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
    public List<SolvedProblemListResponse> getSolvedProblemListByUser() {
        //TODO 페이징 처리
        //TODO 사용자 정보 추가
        List<SolvedProblemListResponse> solvedProblemList = new ArrayList<>();
        List<SolvedProblem> solvedProblemListEntity = solvedProblemRepo.findAllByUser_UserIdAndVisible(1, true);

        if (solvedProblemListEntity.isEmpty()) return solvedProblemList;

        for (SolvedProblem solvedProblem : solvedProblemListEntity) {
            // 분류 값 추가
            List<AlgoGroup> algoGroups = solvedProblem.getProblem().getAlgoGroup();
            List<String> classifications = algoGroups.stream()
                    .map(AlgoGroup::getClassification)
                    .collect(Collectors.toList());

            SolvedProblemListResponse solvedProblemListResponse = SolvedProblemListResponse.builder()
                    .solvedProblem(solvedProblem)
                    .classification(classifications)
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
    public SolvedProblemDetailResponse getSolvedProblemDetail(int username, int solvedProblemId) {

        SolvedProblem solvedProblem = solvedProblemRepo.findById(solvedProblemId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected solvedProblem"));

        return SolvedProblemDetailResponse.builder()
                .solvedProblem(solvedProblem).build();
    }

//    public List<String> makeDateList(int totalDate) {
//        List<String> dateList = new ArrayList<>();
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("####-##-##");
//
//        LocalDate endDate = LocalDate.now();
//        LocalDate startDate = endDate.minusDays(totalDate);
//
//        while (startDate.isBefore(endDate) || startDate.isEqual(endDate)) {
//            dateList.add(startDate.format(formatter));
//            startDate = startDate.plusDays(1);
//        }
//        return dateList;
//    }
}
