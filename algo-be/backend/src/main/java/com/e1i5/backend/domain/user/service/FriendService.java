package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.dto.response.FriendListInterfaceResponse;
import com.e1i5.backend.domain.user.dto.response.FriendListResponse;

import java.util.List;

public interface FriendService {
    /**
     * 2. 친구 취소
     * 3. 친구 목록 불러오기
     * 4. 친구 검색
     */
    void addFriend(int userId, String friendNickname);
    List<FriendListInterfaceResponse> listFriendship(int userId);
}
