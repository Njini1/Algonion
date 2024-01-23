//package com.e1i5.backend.domain.problem.entity;
//
//import jakarta.persistence.*;
//import lombok.AccessLevel;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Table(name = "problem")
//@Getter
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
//public class Problem {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private long problemIdx;
//
//    //TODO 연결은 나중에
//    @Column
//    private String siteName;
//    @Column
//    private String problemNum;
//    @Column
//    private String problemName;
//    @Column
//    private String problemLink;
//    @Column
//    private String originLevel;
//    @Column
//    private String ourLevel;
//
//    @Builder
//    public Problem(long problemIdx, String siteName, String problemNum, String problemName, String problemLink, String originLevel, String ourLevel) {
//        this.problemIdx = problemIdx;
//        this.siteName = siteName;
//        this.problemNum = problemNum;
//        this.problemName = problemName;
//        this.problemLink = problemLink;
//        this.originLevel = originLevel;
//        this.ourLevel = ourLevel;
//    }
//}
