package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.user.repository.DashboardRepository;
import com.e1i5.backend.domain.user.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private final UserInfoRepository userInfoRepository;

    @Autowired
    private final DashboardRepository dashboardRepository;

    @Override
    public List<Problem> getProblemsByNickname(String nickname) {
        return dashboardRepository.findProblemsByUserId(getUserIdByNickname(nickname));
    }

//    @Override
//    public List<Problem> getTop100ProblemsByNickname(String nickname) {
//        return dashboardRepository.findTop100ProblemsByUserId(getUserIdByNickname(nickname));
//    }
//
    private int getUserIdByNickname(String nickname) {
        return userInfoRepository.findByNickname(nickname)
                .orElseThrow(() -> new RuntimeException("User not found for nickname: " + nickname))
                .getUserId();
    }


}
