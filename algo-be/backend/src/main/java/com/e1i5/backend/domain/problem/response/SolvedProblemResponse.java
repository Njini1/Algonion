package com.e1i5.backend.domain.problem.response;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblemResponse {
    //TODO 계속 수정해줘야 함 뭘 프론트로 던져줘야 할지 몰라서 일단 이정도만 했음
    private String problemNum;
    private String level;
    private String title;
    private String selectedLanguage;
    private String siteName;
}
