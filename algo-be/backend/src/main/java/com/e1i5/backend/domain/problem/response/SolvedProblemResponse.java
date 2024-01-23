package com.e1i5.backend.domain.problem.response;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblemResponse {
    private String submissionId; //제출번호
    private String problemId; //문제번호
    private String problemTitle; //문제 제목
    private String problemLevel;
    private String memory;
    private String runtime; //코드 실행 시간
    private String language;
    private String submissionCode; //내가 푼 코드
    private String codeLength; //코드 길이
    private LocalDateTime submissionTime; //제출한 시간
    private String url;

    @Builder
    public SolvedProblemResponse(String submissionId,
                                 String problemId,
                                 String problemTitle,
                                 String problemLevel,
                                 String memory,
                                 String runtime,
                                 String language,
                                 String submissionCode,
                                 String codeLength,
                                 LocalDateTime submissionTime,
                                 String url) {
        this.submissionId = submissionId;
        this.problemId = problemId;
        this.problemTitle = problemTitle;
        this.problemLevel = problemLevel;
        this.memory = memory;
        this.runtime = runtime;
        this.language = language;
        this.submissionCode = submissionCode;
        this.codeLength = codeLength;
        this.submissionTime = submissionTime;
        this.url = url;
    }
}
