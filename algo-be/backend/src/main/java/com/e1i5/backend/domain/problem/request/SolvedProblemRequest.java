package com.e1i5.backend.domain.problem.request;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import lombok.*;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblemRequest {
    private String problemNum;
    private String level;
    private String title;
    private String selectedLanguage;
    private String code;

    //TODO toEntity 참고 (수정 필요)
//    public SolvedProblem toEntity(long name) {
//        return SolvedProblem.builder()
//                .problemNum(problemNum)
//                .siteName(name)
//                .level(level)
////                .title(title)
////                .selectedLanguage(selectedLanguage)
//                .code(code)
//                .build();
//    }

    @Builder
    public SolvedProblemRequest(String problemNum,
                                String level,
                                String title,
                                String selectedLanguage,
                                String code) {
        this.problemNum = problemNum;
        this.level = level;
        this.title = title;
        this.selectedLanguage = selectedLanguage;
        this.code = code;
    }
}
