package com.e1i5.backend.domain.user.dto.response;

import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
public class ExtUserInfoResponse {
    String nickname;
    String tier;
    Map<String, Long> streak;

    @Builder
    public ExtUserInfoResponse(String nickname, String tier, Map<String, Long> streak) {
        this.nickname = nickname;
        this.tier = tier;
        this.streak = streak;
    }
}
