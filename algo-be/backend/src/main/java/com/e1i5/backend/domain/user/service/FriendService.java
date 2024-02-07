package com.e1i5.backend.domain.user.service;

public interface FriendService {
    /**
     * 1. 친구 신청
     * 2. 친구 취소
     * 3. 친구 목록 불러오기
     * 4. 친구 검색
     */
    void addFriend(int userId, String friendNickname);
}
