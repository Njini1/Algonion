package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemDetailResponse;
import com.e1i5.backend.domain.problem.response.SolvedProblemListResponse;
import com.e1i5.backend.domain.problem.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.entity.User;

import java.util.List;

public interface SolvedProblemService {
    void saveBOJSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName);
    void saveNotBOJSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName);
    void saveSolvedProblem(SolvedProblemRequest solvedProblemReq, User user, Problem problem);
    Problem saveOrGetProblem(SolvedProblemRequest solvedProblemReq, String siteName);
    SolvedProblemDetailResponse updateSolvedProblem(int solvedProblemId, String memo);
    List<SolvedProblemListResponse> getSolvedProblemListByUser();
    SolvedProblemDetailResponse getSolvedProblemDetail(int username, int solvedProblemId);
    List<StreakResponseInterface> makeStreak(int userId);
}
