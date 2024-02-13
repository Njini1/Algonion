package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemDetailResponse;
import com.e1i5.backend.domain.problem.response.SolvedProblemListResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.entity.User;

import java.awt.print.Pageable;
import java.util.List;

public interface SolvedProblemService {
    void saveBOJSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName, int userId);
    void saveNotBOJSolvedProblemAndProblem(SolvedProblemRequest solvedProblemReq, String siteName, int userId);
    void saveSolvedProblem(SolvedProblemRequest solvedProblemReq, int userId, Problem problem, int oldAlgoScore);
    SolvedProblemDetailResponse updateSolvedProblem(int userId, int solvedProblemId, String memo);
    SolvedProblemDetailResponse updateVisibility(int userId, int solvedProblemId);
    List<SolvedProblemListResponse> getSolvedProblemListByUser(String nickname, int pageNum);
    SolvedProblemDetailResponse getSolvedProblemDetail(int solvedProblemId);
    int countUserSolvedProblem(String nickname);
}
