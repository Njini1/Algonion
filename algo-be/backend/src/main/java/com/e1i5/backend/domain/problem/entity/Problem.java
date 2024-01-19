package com.e1i5.backend.domain.problem.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "problem")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long problemIdx;

    @Column
    private String problemId;
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
//    @Column
//    private String isSuccess;
//    @Column
//    private String passedTestCase;
//    @Column
//    private String failedTestCase;


    @Builder
    public Problem(String problemId, String level, String title, String selectedLanguage, String code, String memo) {
        this.problemId = problemId;
        this.level = level;
        this.title = title;
        this.selectedLanguage = selectedLanguage;
        this.code = code;
        this.memo = memo;
    }

    public void updateMemo(String memo) {
        this.memo = memo;
    }
}
