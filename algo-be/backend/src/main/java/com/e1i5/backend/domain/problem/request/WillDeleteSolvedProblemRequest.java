package com.e1i5.backend.domain.problem.request;

import lombok.*;


//TODO !!!!!!!!!!!!!이거는 지울 예정 쓰지마세요!!!!!!!!!!!!!
//참조하고 있는 파일이 있어서 내버려 두었습니다 나중에 다 제거할 예정입니다 ㅎㅎ

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WillDeleteSolvedProblemRequest {
    private String problemNum;
    private String level;
    private String title;
    private String selectedLanguage;
    private String code;
    
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
    public WillDeleteSolvedProblemRequest(String problemNum,
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
