package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.dto.response.FriendListInterfaceResponse;
import com.e1i5.backend.domain.user.dto.response.FriendListResponse;
import com.e1i5.backend.domain.user.entity.Friend;
import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import com.e1i5.backend.domain.user.repository.FriendRepository;
import com.e1i5.backend.global.error.GlobalBaseException;
import com.e1i5.backend.global.error.GlobalErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendServiceImpl implements FriendService{

    @Autowired
    private FriendRepository friendRepo;
    @Autowired
    private AuthRepository authRepo;

    @Override
    public void addFriend(int userId, String friendNickname) {
        User friend = getUserByNickname(friendNickname);
        User user = getUserByUserId(userId);

        friendRepo.save(Friend.builder()
                .user(user)
                .friend(friend).build());

    }

    @Override
    public List<FriendListInterfaceResponse> listFriendship(int userId) {
        // 리스트가 비었을 경우 isEmpty 처리
        // 높은 등급 순위대로 티어, 닉네임, 점수, 푼 문제수?
        List<FriendListInterfaceResponse> friends = friendRepo.getFriendInfoByFriendId(userId);
        return friends;
    }

    private User getUserByNickname(String nickname) {
        return authRepo.findByNickname(nickname)
                .orElseThrow(() -> new GlobalBaseException(GlobalErrorCode.USER_NOT_FOUND));
    }

    private User getUserByUserId(int userId) {
        return authRepo.findById(userId)
                .orElseThrow(() -> new GlobalBaseException(GlobalErrorCode.USER_NOT_FOUND));
    }
}
