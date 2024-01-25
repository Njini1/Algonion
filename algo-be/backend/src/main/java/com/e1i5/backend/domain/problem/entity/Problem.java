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
//    private String siteName;
//    private String problemNum;
//    private String problemTitle;
//    private String url;
//    private String problemLevel;
//    private String ourLevel;
//
//    @Builder
//    public Problem(long problemIdx,
//                   String siteName,
//                   String problemNum,
//                   String problemTitle,
//                   String url,
//                   String problemLevel,
//                   String ourLevel) {
//        this.problemIdx = problemIdx;
//        this.siteName = siteName;
//        this.problemNum = problemNum;
//        this.problemTitle = problemTitle;
//        this.url = url;
//        this.problemLevel = problemLevel;
//        this.ourLevel = ourLevel;
//    }
//}
