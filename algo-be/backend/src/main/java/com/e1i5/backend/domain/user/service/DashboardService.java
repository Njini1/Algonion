package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.user.dto.response.DashBoardProblemListResponse;
import com.e1i5.backend.domain.user.repository.DashboardRepository;

import java.util.List;

public interface DashboardService {
    List<DashBoardProblemListResponse> getProblemsByNickname(String nickname);
    List<DashBoardProblemListResponse> getTop2ProblemsByNickname(String nickname);
}
