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
    private long solvedProblemIdx;

    @Column
    private String siteName;

    //TODO: 나중에 유저,문제테이블 조인해야 함 지금은 임의의 값 넣을거임 해줘
    @Column
    private String userNo;
    @Column
    private String problemNum;


    @Column
    private String level; //TODO problem으로 넘겨줘
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
    public SolvedProblem(long solvedProblemIdx,
                         String siteName,
                         String userNo,
                         String problemNum,
                         String level,
                         String title,
                         String selectedLanguage,
                         String code,
                         String memo,
                         boolean isDelete) {
        this.solvedProblemIdx = solvedProblemIdx;
        this.siteName = siteName;
        this.userNo = userNo;
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

    @Override
    public String toString() {
        return "SolvedProblem{" +
                "solvedProblemIdx=" + solvedProblemIdx +
                ", siteName='" + siteName + '\'' +
                ", userNo='" + userNo + '\'' +
                ", problemNum='" + problemNum + '\'' +
                ", level='" + level + '\'' +
                ", title='" + title + '\'' +
                ", selectedLanguage='" + selectedLanguage + '\'' +
                ", code='" + code + '\'' +
                ", memo='" + memo + '\'' +
                ", isDelete=" + isDelete +
                '}';
    }
}
