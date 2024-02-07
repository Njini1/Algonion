package com.e1i5.backend.domain.problem.request;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import com.e1i5.backend.global.util.AlgoScoreUtil;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblemRequest {
    private String submissionId; //제출번호
    private String problemNum; //문제번호
    private String problemTitle; //문제 제목
    private String problemLevel;
    private String memory;
    private String runtime; //코드 실행 시간
    private String language; 
    private String submissionCode; //내가 푼 코드
    private String memo;
    private String codeLength; //코드 길이
    private String submissionTime; //제출한 시간
//    private LocalDateTime submissionTime; //제출한 시간
    private String url;

    public SolvedProblem toSolvedProblemEntity() {
        return SolvedProblem.builder()
                .submissionId(submissionId)
                .language(language)
                .submissionCode(submissionCode)
                .memo(memo)
                .runtime(runtime)
                .codeLength(codeLength)
                .memory(memory)
                .submissionTime(LocalDate.now().toString())
                .visible(true)
                .build();
    }

    public Problem toProblemEntity() {
//        int algoScore = AlgoScoreUtil.getBojScore(Integer.parseInt(problemLevel));
        return Problem.builder()
                .problemNum(problemNum)
                .problemTitle(problemTitle)
                .problemLevel(problemLevel)
//                .algoScore(algoScore)
                .url(url)
                .build();
    }

    public SolvedProblemRequest isNullUpateLevel(String problemLevel) {
        this.problemLevel = problemLevel;
        return this;
    }
}
