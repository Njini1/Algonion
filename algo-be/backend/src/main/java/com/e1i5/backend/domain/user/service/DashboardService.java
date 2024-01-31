package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;

import java.util.List;

public interface DashboardService {
    List<Problem> getProblemsByNickname(String nickname);
//    List<Problem> getTop100ProblemsByNickname(String nickname);
}
