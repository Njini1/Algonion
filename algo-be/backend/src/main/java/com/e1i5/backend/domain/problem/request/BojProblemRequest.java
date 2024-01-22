package com.e1i5.backend.domain.problem.request;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BojProblemRequest {
    private String submissionNum; //제출번호
    private String problemNum; //문제번호
    private String memory;
    private String runtime; //코드 실행 시간
    private String language; 
    private String submissionCode; //내가 푼 코드
    private String codeLength; //코드 길이
    private String submissionTime; //제출한 시간
    private String link;

    @Override
    public String toString() {
        return "BojProblemRequest{" +
                "submissionNum='" + submissionNum + '\'' +
                ", problemNum='" + problemNum + '\'' +
                ", memory='" + memory + '\'' +
                ", runtime='" + runtime + '\'' +
                ", language='" + language + '\'' +
                ", submissionCode='" + submissionCode + '\'' +
                ", codeLength='" + codeLength + '\'' +
                ", submissionTime='" + submissionTime + '\'' +
                ", link='" + link + '\'' +
                '}';
    }

    @Builder
    public BojProblemRequest(String submissionNum,
                             String problemNum,
                             String memory,
                             String runtime,
                             String language,
                             String submissionCode,
                             String codeLength,
                             String submissionTime,
                             String link) {
        this.submissionNum = submissionNum;
        this.problemNum = problemNum;
        this.memory = memory;
        this.runtime = runtime;
        this.language = language;
        this.submissionCode = submissionCode;
        this.codeLength = codeLength;
        this.submissionTime = submissionTime;
        this.link = link;
    }

    public SolvedProblem toEntity(long userNo, String siteName) {
        return SolvedProblem.builder()
                .submissionNum(submissionNum)
                .problemNum(problemNum)
                .siteName(siteName)
                .userNo(userNo)
                .memory(memory)
                .runtime(runtime)
                .language(language)
                .submissionCode(submissionCode)
                .codeLength(codeLength)
                .submissionTime(LocalDateTime.now())
                .link(link)
                .build();
    }
}
