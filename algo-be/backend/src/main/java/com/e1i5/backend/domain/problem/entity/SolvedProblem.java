package com.e1i5.backend.domain.problem.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "solved_problem")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SolvedProblem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long solvedProblemIdx;

    @Column
    private String submissionId; //제출 번호
    @Column
    private String problemId; //문제 번호
    @Column
    private String problemTitle; //문제 이름
    @Column
    private String siteName;

    //TODO: 나중에 유저,문제테이블 연결해야 함 지금은 임의의 값 넣을거임
    @Column
    private long userNo;

    @Column
    private String problemLevel; //problem table로??
    @Column
    private String language;

    //@Lob 어노테이션은 DB에서 varchar보다 더 많은 데이터를 담으려고 사용한 거임 코드나 메모는 길어질 수 있으니까
    @Column
    @Lob
    private String submissionCode;
    @Column
    @Lob
    private String memo;

    @Column
    private String memory;
    @Column
    private String runtime;
    @Column
    private String codeLength;
    @Column
    private LocalDateTime submissionTime; //문제 푼 날짜,시간
    @Column
    private String url;

    @Column
    private boolean visible;

    @Builder
    public SolvedProblem(long solvedProblemIdx,
                         String submissionId,
                         String problemId,
                         String problemTitle,
                         String siteName,
                         long userNo,
                         String problemLevel,
                         String language,
                         String submissionCode,
                         String memo,
                         String memory,
                         String runtime,
                         String codeLength,
                         LocalDateTime submissionTime,
                         String url,
                         boolean visible) {
        this.solvedProblemIdx = solvedProblemIdx;
        this.submissionId = submissionId;
        this.problemId = problemId;
        this.problemTitle = problemTitle;
        this.siteName = siteName;
        this.userNo = userNo;
        this.problemLevel = problemLevel;
        this.language = language;
        this.submissionCode = submissionCode;
        this.memo = memo;
        this.memory = memory;
        this.runtime = runtime;
        this.codeLength = codeLength;
        this.submissionTime = submissionTime;
        this.url = url;
        this.visible = visible;
    }

    public void updateMemo(String memo) {
        this.memo = memo;
    }
}
