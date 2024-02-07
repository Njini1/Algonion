package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.Friend;
import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.exception.UserNotFoundException;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import com.e1i5.backend.domain.user.repository.FriendRepository;
import com.e1i5.backend.global.error.GlobalBaseException;
import com.e1i5.backend.global.error.GlobalErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FriendServiceImpl implements FriendService{

    @Autowired
    private FriendRepository friendRepo;
    @Autowired
    private AuthRepository authRepo;

    @Override
    public void addFriend(int userId, String friendNickname) {
        System.out.println("userId: " + userId + " , friend:" + friendNickname);
        User friend = getUserByNickname(friendNickname);
        User user = getUserByUserId(userId);

        friendRepo.save(Friend.builder()
                .user(user)
                .friend(friend).build());

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
