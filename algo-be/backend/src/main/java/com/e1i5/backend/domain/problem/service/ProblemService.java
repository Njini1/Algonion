package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.request.WillDeleteSolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemResponse;

import java.util.List;

public interface ProblemService {
    void saveSolvedProblem(SolvedProblemRequest problem, String siteName);
    void updateProblem(long idx, String memo) throws Exception;
    List<SolvedProblemResponse> getSolvedProblem(long userId) throws Exception;
    SolvedProblemResponse getSolvedProblemDetail(long userId, long solvedProblemIdx) throws Exception;
}
