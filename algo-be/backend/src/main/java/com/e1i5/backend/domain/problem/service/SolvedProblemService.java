package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.exception.SolvedProblemNotFoundException;
import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemDetailResponse;
import com.e1i5.backend.domain.problem.response.SolvedProblemListResponse;
import com.e1i5.backend.domain.user.entity.User;

import java.util.List;

public interface SolvedProblemService {
    void saveSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName);
    void saveSolvedProblem(SolvedProblemRequest solvedProblemReq, User usre, Problem problem);
    Problem saveOrGetProblem(SolvedProblemRequest solvedProblemReq, String siteName);
    SolvedProblemDetailResponse updateSolvedProblem(int solvedProblemId, String memo);
    List<SolvedProblemListResponse> getSolvedProblemListByUser();
    SolvedProblemDetailResponse getSolvedProblemDetail(int username, int solvedProblemId);
}
