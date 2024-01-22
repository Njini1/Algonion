package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.exception.SolvedProblemNotFoundException;
import com.e1i5.backend.domain.problem.repository.ProblemRepository;
import com.e1i5.backend.domain.problem.request.BojProblemRequest;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProblemServiceImpl implements ProblemService {

    @Autowired
    ProblemRepository problemRepository;

    /**
     * 사용자가 문제 푼 사용자 데이터와 문제 데이터 저장
     * @param solvedProblem 사용자가 문제 푼 데이터
     */
    
    //이거 안쓸거임 내가 지울 예정
    @Override
    public void saveProblem(SolvedProblemRequest solvedProblem, String siteName) {
//        problemRepository.save(solvedProblem.toEntity(siteName));
    }


    @Override
    public void saveBoj(BojProblemRequest problem) {
        //TODO 첫 번째 파라미터 값은 유저 id(pk값)이라서 나중에 추가 지금은 임의데이터(1)로 진행
        //TODO 같은 문제 번호를 비교해 주고 제출번호 비교해서 없으면 저장으로 바꿔
        //TODO 문제번호 비교해서 점수 더하는 거도 추가해줘
        problemRepository.save(problem.toEntity(1, "boj"));
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

    @Override
    public void getSolvedProblem(String userId) throws Exception {
//        List<SolvedProblemResponse> list = problemRepository.findAllBy()

    }
}
