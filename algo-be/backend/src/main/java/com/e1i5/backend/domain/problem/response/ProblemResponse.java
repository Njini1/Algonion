package com.e1i5.backend.domain.problem.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProblemResponse {
    private String siteName;
    private String problemNum;
    private String problemTitle;
    private String problemLevel;
    private String url;
//    private int algoScore;

    @Builder
    public ProblemResponse(String siteName, String problemNum, String problemTitle, String problemLevel, String url) {
        this.siteName = siteName;
        this.problemNum = problemNum;
        this.problemTitle = problemTitle;
        this.problemLevel = problemLevel;
        this.url = url;
    }
}
