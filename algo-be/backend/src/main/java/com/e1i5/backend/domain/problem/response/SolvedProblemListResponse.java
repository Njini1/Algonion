package com.e1i5.backend.domain.problem.response;

import com.e1i5.backend.domain.problem.model.entity.AlgoGroup;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblemListResponse {
    private String siteName;
    private String problemNum;; //문제번호
    private String problemTitle; //문제 제목
    private String problemLevel;
    private String language;
    private LocalDateTime submissionTime; //제출한 시간
    private String url;
//    private Problem problem;
    private List<String> classification;


    @Builder
    public SolvedProblemListResponse(SolvedProblem solvedProblem,List<String> classification) {
        this.siteName = solvedProblem.getProblem().getSiteName();
        this.problemNum = solvedProblem.getProblem().getProblemNum();
        this.problemTitle = solvedProblem.getProblem().getProblemTitle();
        this.problemLevel = solvedProblem.getProblem().getProblemLevel();
        this.language = solvedProblem.getProblem().getProblemLevel();
        this.submissionTime = solvedProblem.getSubmissionTime();
        this.url = solvedProblem.getProblem().getUrl();
        this.classification = classification;
    }

}
