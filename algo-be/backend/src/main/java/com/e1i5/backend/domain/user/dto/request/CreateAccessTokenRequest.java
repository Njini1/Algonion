package com.e1i5.backend.domain.user.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
public class CreateAccessTokenRequest {
    private String refreshToken;

    @Builder
    public CreateAccessTokenRequest(String refreshToken) {
        this.refreshToken = refreshToken;
    }
}