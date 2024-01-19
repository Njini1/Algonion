package com.e1i5.backend.domain.problem.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "solved_problem")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long problemIdx;

    @Column
    private String siteName;
    @Column
    private String problemNum;
    @Column
    private String level;
    @Column
    private String title;
    @Column
    private String selectedLanguage;
    @Column
    private String code;
    @Column
    private String memo;
    @Column
    private boolean isDelete;
//    @Column
//    private String isSuccess;
//    @Column
//    private String passedTestCase;
//    @Column
//    private String failedTestCase;

    @Builder
    public SolvedProblem(long problemIdx, String siteName, String problemNum, String level, String title, String selectedLanguage, String code, String memo, boolean isDelete) {
        this.problemIdx = problemIdx;
        this.siteName = siteName;
        this.problemNum = problemNum;
        this.level = level;
        this.title = title;
        this.selectedLanguage = selectedLanguage;
        this.code = code;
        this.memo = memo;
        this.isDelete = isDelete;
    }


    public void updateMemo(String memo) {
        this.memo = memo;
    }
}
