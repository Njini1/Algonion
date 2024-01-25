package com.e1i5.backend.domain.problem.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "problem")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long problemIdx;

//    siteName과 problemNum을 통해 문제 식별
//    -> nullablem = false 설정
    @Column(nullable = false)
    private String siteName;
    @Column(nullable = false)
    private String problemNum;
    @Column
    private String problemTitle; //문제 이름
    @Column
    private String url;
    @Column
    private String originLevel;
    @Column
    private String ourLevel;



    @Builder
    public Problem(long problemIdx, String siteName, String problemNum, String problemTitle, String url, String originLevel, String ourLevel) {
        this.problemIdx = problemIdx;
        this.siteName = siteName;
        this.problemNum = problemNum;
        this.problemTitle = problemTitle;
        this.url = url;
        this.originLevel = originLevel;
        this.ourLevel = ourLevel;
    }

}
