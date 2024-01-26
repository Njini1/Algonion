package com.e1i5.backend.domain.problem.model.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "problem")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "problem_id")
    private int problemId;

    @Column(name = "site_name")
    private String siteName;

    @Column(name = "num")
    private String problemNum; //문제 번호

    @Column(name = "title")
    private String problemTitle; //문제 이름

    @Column(name = "level")
    private String problemLevel;

    @Column(name = "url")
    private String url;

    @OneToMany(mappedBy = "problem")
    private List<AlgoGroup> algoGroup;

    @Builder
    public Problem(String siteName, String problemNum, String problemTitle, String problemLevel, String url) {
        this.siteName = siteName;
        this.problemNum = problemNum;
        this.problemTitle = problemTitle;
        this.problemLevel = problemLevel;
        this.url = url;
    }

    public void updateSiteName(String siteName) {
        this.siteName = siteName;
    }

    public Problem updateLevel(String level) {
        this.problemLevel = level;
        return this;
    }

    @Override
    public String toString() {
        return "Problem{" +
                "problemId=" + problemId +
                ", siteName='" + siteName + '\'' +
                ", problemNum='" + problemNum + '\'' +
                ", problemTitle='" + problemTitle + '\'' +
                ", problemLevel='" + problemLevel + '\'' +
                ", url='" + url + '\'' +
                ", algoGroup=" + algoGroup +
                '}';
    }
}
