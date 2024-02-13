package com.e1i5.backend.domain.problem.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class NotionRequest {
    private String apiKey;
    private String dbId;

    public NotionRequest(String apiKey, String dbId) {
        this.apiKey = apiKey;
        this.dbId = dbId;
    }
}
