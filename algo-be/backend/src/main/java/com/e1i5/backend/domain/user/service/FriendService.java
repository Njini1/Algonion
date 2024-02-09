package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.dto.response.FriendListInterfaceResponse;
import com.e1i5.backend.domain.user.dto.response.FriendListResponse;

import java.util.List;

public interface FriendService {
    /**
     * 2. 친구 취소
     * 4. 친구 검색
     */
    void addFriend(int userId, String friendNickname);
    List<FriendListInterfaceResponse> listFriendship(int userId);
    List<FriendListInterfaceResponse> searchNickname(String nickname);
}
