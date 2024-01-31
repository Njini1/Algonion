package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
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

//        중복제거하지 않은 모든 리스트 받아오기
//        List<DashBoardProblemListResponse> solvedProblemsList = dashboardRepository.findSolvedProblemsByUserId(userId)
//                .stream()
//                .map(DashBoardProblemListResponse::new)
//                .collect(Collectors.toList());

        List<Integer> distinctProblemIds = dashboardRepository.findDistinctProblemIdsByUserId(userId);

        List<Problem> uniqueProblems = dashboardRepository.findAllByProblemIdIn(distinctProblemIds);

        List<DashBoardProblemListResponse> solvedProblemsList = uniqueProblems
                .stream()
                .map(DashBoardProblemListResponse::new)
                .collect(Collectors.toList());


        System.out.println("/////////////////////////////n/n/n");

        return solvedProblemsList;
    }

    private int getUserIdByNickname(String nickname) {
        return userInfoRepository.findByNickname(nickname)
                .orElseThrow(() -> new RuntimeException("User not found for nickname: " + nickname))
                .getUserId();
    }
}