package com.e1i5.backend.domain.problem.model.entity;

import com.e1i5.backend.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "solved_problem")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class SolvedProblem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "solved_problem_id")
    private int solvedProblemId;

    @Column(name = "submission_id")
    private String submissionId; //제출 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "problem_id")
    private Problem problem;

    @Column(name = "language")
    private String language;

    //@Lob 어노테이션은 DB에서 varchar보다 더 많은 데이터를 담으려고 사용한 거임 코드나 메모는 길어질 수 있으니까
    @Column(name = "submission_code")
    @Lob
    private String submissionCode;

    @Column(name = "memo")
    @Lob
    private String memo;

    @Column(name = "memory")
    private String memory;

    @Column(name = "runtime")
    private String runtime;

    @Column(name = "code_length")
    private String codeLength;

    @Column(name = "submission_time")
//    private LocalDateTime submissionTime; //문제 푼 날짜,시간
    private String submissionTime;

    @Column(name = "visible")
    private boolean visible;

    @Builder
    public SolvedProblem(String submissionId, User user, Problem problem, String language, String submissionCode, String memo, String memory, String runtime, String codeLength, String submissionTime, boolean visible) {
        this.submissionId = submissionId;
        this.user = user;
        this.problem = problem;
        this.language = language;
        this.submissionCode = submissionCode;
        this.memo = memo;
        this.memory = memory;
        this.runtime = runtime;
        this.codeLength = codeLength;
        this.submissionTime = submissionTime;
        this.visible = visible;
    }

    public void updateMemo(String memo) {
        this.memo = memo;
    }

    public void updateUserAndProblem(User user, Problem problem) {

        this.user = user;
        this.problem = problem;
    }

//    public void updateProblem(Problem problem) {
//        this.problem = problem;
//    }

    @Override
    public String toString() {
        return "SolvedProblem{" +
                "solvedProblemId=" + solvedProblemId +
                ", submissionId='" + submissionId + '\'' +
                ", user=" + user +
                ", problem=" + problem +
                ", language='" + language + '\'' +
                ", code='" + submissionCode + '\'' +
                ", memo='" + memo + '\'' +
                ", memory='" + memory + '\'' +
                ", runtime='" + runtime + '\'' +
                ", codeLength='" + codeLength + '\'' +
                ", submissionTime=" + submissionTime +
                ", visible=" + visible +
                '}';
    }
}
