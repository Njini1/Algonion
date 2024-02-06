package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.dto.response.DashBoardProblemListResponse;

import java.util.List;
import java.util.Map;

public interface DashboardService {
    List<DashBoardProblemListResponse> getProblemsByNickname(String nickname);
    Map<String, Long> makeStreak(String userName, String startDate, String endDate);
    int[] getAlgoScoreCountsByNickname(String nickname);

    String makeAccumulatedNumGraph();
}
