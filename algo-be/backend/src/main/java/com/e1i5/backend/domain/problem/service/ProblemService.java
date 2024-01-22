package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.request.BojProblemRequest;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;

public interface ProblemService {
    void saveProblem(SolvedProblemRequest solvedProblem, String siteName);
    void saveBoj(BojProblemRequest problem);
    void updateProblem(long idx, String memo) throws Exception;
    void getSolvedProblem(String userId) throws Exception;
}
