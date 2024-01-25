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
        this.problemTitle = (problemTitle != null) ? problemTitle : "기본 제목";
        this.url = (url != null) ? url : "기본 URL";
        this.originLevel = (originLevel != null) ? originLevel : "기본 원본 레벨";
        this.ourLevel = (ourLevel != null) ? ourLevel : "기본 우리 레벨";
    }

}
