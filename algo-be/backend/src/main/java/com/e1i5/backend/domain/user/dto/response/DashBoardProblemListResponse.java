package com.e1i5.backend.domain.user.dto.response;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import lombok.*;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DashBoardProblemListResponse {
    private int problemId;
    private String problemNum;
    private String problemTitle;
    private String problemLevel;
    private String url;

    @Builder
    public DashBoardProblemListResponse(Problem problem) {
        this.problemId = problem.getProblemId();
        this.problemNum = problem.getProblemNum();
        this.problemTitle = problem.getProblemTitle();
        this.problemLevel = problem.getProblemLevel();
        this.url = problem.getUrl();
    }
}
