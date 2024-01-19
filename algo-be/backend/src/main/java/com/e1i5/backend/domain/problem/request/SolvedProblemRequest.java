package com.e1i5.backend.domain.problem.request;

import com.e1i5.backend.domain.problem.entity.Problem;
import lombok.*;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblemRequest {
    private String problemId;
    private String level;
    private String title;
    private String selectedLanguage;
    private String code;

    public Problem toEntity() {
        return Problem.builder().problemId(problemId).level(level).title(title).selectedLanguage(selectedLanguage).code(code).build();
    }

    @Builder
    public SolvedProblemRequest(String problemId, String level, String title, String selectedLanguage, String code) {
        this.problemId = problemId;
        this.level = level;
        this.title = title;
        this.selectedLanguage = selectedLanguage;
        this.code = code;
    }
}
