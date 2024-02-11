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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FriendServiceImpl implements FriendService{

    @Autowired
    private FriendRepository friendRepo;
    @Autowired
    private AuthRepository authRepo;

    @Override
    public void addFriend(int userId, String friendNickname) {
        User user = getUserByUserId(userId);
        User friend = getUserByNickname(friendNickname);

        boolean friendship = friendRepo.existsByUserAndFriend(user, friend);

        if (!friendship) {
            Friend friendEntity = Friend.builder()
                    .user(user)
                    .friend(friend)
                    .build();

            friendRepo.save(friendEntity);
        }
    }

    @Override
    public List<FriendListInterfaceResponse> listFriendship(int userId) {
        // 높은 등급 순위대로 티어, 닉네임, 점수, 푼 문제수?
        List<FriendListInterfaceResponse> friends = new ArrayList<>();
        friends = friendRepo.getFriendInfoByFriendId(userId);

        return friends;
    }

    @Override
    public List<FriendListInterfaceResponse> searchNickname(String nickname) {
        // 로그인한 사람과 친구 관계 여부도 추가 고려
        List<FriendListInterfaceResponse> friends = authRepo.findByNicknameContaining(nickname);

        return friends;
    }

    @Override
    public void cancelFriendship(int userId, String friendNickname) {
        User user = getUserByUserId(userId);
        User friend = getUserByNickname(friendNickname);

        Optional<Friend> friendship = friendRepo.findByUserAndFriend(user, friend);

        friendship.ifPresent(value -> friendRepo.delete(value));
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
