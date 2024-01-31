package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.user.repository.DashboardRepository;
import com.e1i5.backend.domain.user.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private final UserInfoRepository userInfoRepository;

    @Autowired
    private final DashboardRepository dashboardRepository;

    @Override
    public List<Problem> getProblemsByNickname(String nickname) {
        int userId = getUserIdByNickname(nickname);
        List<Integer> distinctProblemIds = dashboardRepository.findDistinctProblemIdsByUserId(userId);
        return dashboardRepository.findAllByProblemIdIn(distinctProblemIds);
    }

//    @Override
//    public List<Problem> getTop100ProblemsByNickname(String nickname) {
//        return dashboardRepository.findTop100ByOrderByProblemLevelDesc();
//    }

    private int getUserIdByNickname(String nickname) {
        return userInfoRepository.findByNickname(nickname)
                .orElseThrow(() -> new RuntimeException("User not found for nickname: " + nickname))
                .getUserId();
    }


}
