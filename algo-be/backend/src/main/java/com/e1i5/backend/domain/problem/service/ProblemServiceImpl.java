package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.exception.SolvedProblemNotFoundException;
import com.e1i5.backend.domain.problem.repository.ProblemRepository;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProblemServiceImpl implements ProblemService {

    @Autowired
    ProblemRepository problemRepository;

    /**
     * 사용자가 문제 푼 사용자 데이터와 문제 데이터 저장
     * @param solvedProblem 사용자가 문제 푼 데이터
     */
    @Override
    public void saveProblem(SolvedProblemRequest solvedProblem) {
        //TODO: 현재는 사용자 데이터와 문제 데이터를 한번에 넣지만 추후에 각각 테이블로 나누어 저장 예정
        problemRepository.save(solvedProblem.toEntity("백준"));
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
}
