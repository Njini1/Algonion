package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.user.dto.response.DashBoardProblemListResponse;
import com.e1i5.backend.domain.user.repository.DashboardRepository;
import com.e1i5.backend.domain.user.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private final UserInfoRepository userInfoRepository;

    @Autowired
    private final DashboardRepository dashboardRepository;

    @Override
    public List<DashBoardProblemListResponse> getProblemsByNickname(String nickname) {
        int userId = getUserIdByNickname(nickname);

        List<Problem> solvedProblemsList = dashboardRepository.findProblemsByNicknameOrderedByLevel(userId);

        // Entity를 Response로 변환
        List<DashBoardProblemListResponse> responseList = solvedProblemsList.stream()
                .map(DashBoardProblemListResponse::new)
                .collect(Collectors.toList());

        return responseList;
    }

    private int getUserIdByNickname(String nickname) {
        return userInfoRepository.findByNickname(nickname)
                .orElseThrow(() -> new RuntimeException("User not found for nickname: " + nickname))
                .getUserId();
    }
}