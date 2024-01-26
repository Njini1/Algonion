package com.e1i5.backend.domain.problem.request;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblemRequest {

    private String submissionId; //제출번호
    private String problemNum; //문제번호
    private String problemTitle; //문제 제목
    private String problemLevel; // 문제 난이도
    private String memo; // 메모
    private String memory; // 답안 메모리
    private String runtime; //코드 실행 시간
    private String language; 
    private String submissionCode; //내가 푼 코드
    private String codeLength; //코드 길이
    private LocalDateTime submissionTime; //제출한 시간
    private String url;

    public SolvedProblemRequest(String submissionId,
                                String problemNum,
                                String problemTitle,
                                String problemLevel,
                                String memo,
                                String memory,
                                String runtime,
                                String language,
                                String submissionCode, 
                                String codeLength,
                                LocalDateTime submissionTime,
                                String url) {
        this.submissionId = submissionId;
        this.problemNum = problemNum;
        this.problemTitle = problemTitle;
        this.problemLevel = problemLevel;
        this.memo = memo;
        this.memory = memory;
        this.runtime = runtime;
        this.language = language;
        this.submissionCode = submissionCode;
        this.codeLength = codeLength;
        this.submissionTime = submissionTime;
        this.url = url;
    }

//    public SolvedProblem toSolvedProblemEntity(long userNo, String siteName) {
//        return SolvedProblem.builder()
//                .submissionId(submissionId)
//                .submissionCode(submissionCode)
//                .memo(memo)
//                .language(language)
//                .memory(memory)
//                .runtime(runtime)
//                .codeLength(codeLength)
//                .submissionTime(LocalDateTime.now())
//                .visible(true)
//                .build();
//    }



//    public SolvedProblem toBojEntity(long userNo, String siteName) {
//        return SolvedProblem.builder()
//                .submissionId(submissionId)
//                .problemId(problemId)
//                .siteName(siteName)
//                .userNo(userNo)
//                .memory(memory)
//                .runtime(runtime)
//                .language(language)
//                .submissionCode(submissionCode)
//                .codeLength(codeLength)
//                .submissionTime(LocalDateTime.now())
//                .url(url)
//                .visible(true)
//                .build();
//    }
//
//    public SolvedProblem toSweaEntity(long userNo, String siteName) {
//        return SolvedProblem.builder()
//                .submissionId(submissionId)
//                .problemId(problemId)
//                .problemTitle(problemTitle)
//                .siteName(siteName)
//                .userNo(userNo)
//                .memory(memory)
//                .runtime(runtime)
//                .language(language)
//                .submissionCode(submissionCode)
//                .codeLength(codeLength)
//                .submissionTime(LocalDateTime.now())
//                .url(url)
//                .visible(true)
//                .build();
//    }
//
//    public SolvedProblem toProgrammersEntity(long userNo, String siteName) {
//        return SolvedProblem.builder()
//                .submissionId(submissionId)
//                .problemLevel(problemLevel)
//                .problemTitle(problemTitle)
//                .language(language)
//                .submissionCode(submissionCode)
//                .userNo(userNo)
//                .siteName(siteName)
//                .submissionTime(LocalDateTime.now())
//                .visible(true)
//                .build();
//    }
}
