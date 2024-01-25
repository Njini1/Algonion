package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.exception.SolvedProblemNotFoundException;
import com.e1i5.backend.domain.problem.repository.ProblemRepository;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.request.WillDeleteSolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProblemServiceImpl implements ProblemService {

    @Autowired
    ProblemRepository problemRepository;

    @Override
    public void saveSolvedProblem(SolvedProblemRequest problem, String siteName) {
        //TODO 첫 번째 파라미터 값은 유저 id(pk값)이라서 나중에 추가 지금은 임의데이터(1)로 진행
        //TODO 같은 문제 번호를 비교해 주고 제출번호 비교해서 없으면 저장으로 바꿔
        //TODO 문제번호 비교해서 점수 더하는 거도 추가해줘

        switch (siteName) {
            case "boj" :
                problemRepository.save(problem.toBojEntity(1, siteName));
                break;
            case "swea" :
                problemRepository.save(problem.toSweaEntity(1, siteName));
                break;
            case "programmers" :
                problemRepository.save(problem.toProgrammersEntity(1, siteName));
                break;
        }

    }

    /**
     * 사용자가 문제 푼 데이터에서 메모 수정
     * @param idx 수정할 문제 인덱스
     * @param memo 수정할 문제 메모
     */
    @Transactional
    @Override
    public void updateProblem(long idx, String memo) throws Exception { // 추후 에러 던지는 거 변경 RuntimeException으로?
        SolvedProblem problem = problemRepository.findById(idx).orElseThrow(() -> new SolvedProblemNotFoundException("사용자가 푼 문제 데이터를 찾지 못함")); //추후 상태코드로 변경
        problem.updateMemo(memo);
    }
    //dirty checking 티어랑 점수 update해주는거 보기

    @Override
    public List<SolvedProblemResponse> getSolvedProblem(long userId) throws Exception {
        List<SolvedProblem> solvedProblemList = problemRepository.findAllByUserNoAndVisible(userId, true);
        List<SolvedProblemResponse> solvedProblemResponseList = new ArrayList<>();

        for(SolvedProblem solvedProblem : solvedProblemList) {
            SolvedProblemResponse problem = SolvedProblemResponse.builder()
                    .submissionId(solvedProblem.getSubmissionId())
                    .problemId(solvedProblem.getProblemId())
                    .problemTitle(solvedProblem.getProblemTitle())
                    .problemLevel(solvedProblem.getProblemLevel())
                    .memory(solvedProblem.getMemory())
                    .runtime(solvedProblem.getRuntime())
                    .language(solvedProblem.getLanguage())
                    .submissionCode(solvedProblem.getSubmissionCode())
                    .codeLength(solvedProblem.getCodeLength())
                    .submissionTime(solvedProblem.getSubmissionTime())
                    .url(solvedProblem.getUrl())
                    .build();

            solvedProblemResponseList.add(problem);
        }

        return solvedProblemResponseList;
    }

    @Override
    public SolvedProblemResponse getSolvedProblemDetail(long userId, long solvedProblemIdx) throws Exception {
        SolvedProblem solvedProblem = problemRepository.findAllBySolvedProblemIdxAndUserNo(solvedProblemIdx, userId);
        return SolvedProblemResponse.builder()
                .submissionId(solvedProblem.getSubmissionId())
                .problemId(solvedProblem.getProblemId())
                .problemTitle(solvedProblem.getProblemTitle())
                .problemLevel(solvedProblem.getProblemLevel())
                .memory(solvedProblem.getMemory())
                .runtime(solvedProblem.getRuntime())
                .language(solvedProblem.getLanguage())
                .submissionCode(solvedProblem.getSubmissionCode())
                .codeLength(solvedProblem.getCodeLength())
                .submissionTime(solvedProblem.getSubmissionTime())
                .url(solvedProblem.getUrl())
                .build();
    }
}
