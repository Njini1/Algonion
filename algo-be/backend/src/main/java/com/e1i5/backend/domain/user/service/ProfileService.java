package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.dto.response.StreakResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.dto.response.UserInfoResponse;
import com.e1i5.backend.domain.user.entity.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface ProfileService {
    void saveUserProfile(int userId, MultipartFile profileImg);
    List<StreakResponseInterface> getUserStreak(int userId);
    Map<String, Long> getUserSevenStreak(int userId);
//    List<StreakResponseInterface> getUserSevenStreak(int userId);
    StreakResponse makeStreak();
    List<String> makeDateList(int totalDate);
    UserInfoResponse getUserInfo(String nickname);
}
