package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;

import java.util.List;

public interface ProblemService {
    void saveProblem(SolvedProblemRequest solvedProblem, String siteName);
    void updateProblem(long idx, String memo) throws Exception;
    List<SolvedProblem> getSolvedProblem(String userId, boolean isDelete) throws Exception;
    List<SolvedProblem> getSolvedProblemLevel(String userId, String level) throws Exception;
    void hideSolvedProblem(Long id) throws Exception;
}
