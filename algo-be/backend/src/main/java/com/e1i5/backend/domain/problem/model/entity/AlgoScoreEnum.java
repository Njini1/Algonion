package com.e1i5.backend.domain.problem.model.entity;

public enum AlgoScoreEnum {
    BOJ_SCORE_0(0, 0),
    BOJ_SCORE_1_TO_5(1, 1),
    BOJ_SCORE_6_TO_10(2, 8),
    BOJ_SCORE_11_TO_15(3, 40),
    BOJ_SCORE_16_TO_20(4, 200),
    BOJ_SCORE_21_TO_25(5, 1000),
    BOJ_SCORE_26_TO_30(6, 3000),

    PROGRAMMERS_SCORE_0(0, 1),
    PROGRAMMERS_SCORE_1(1, 8),
    PROGRAMMERS_SCORE_2(2, 40),
    PROGRAMMERS_SCORE_3(3, 200),
    PROGRAMMERS_SCORE_4(4, 1000),
    PROGRAMMERS_SCORE_5(5, 3000),

    SWEA_SCORE_D1(0, 1),
    SWEA_SCORE_D2(1, 8),
    SWEA_SCORE_D3_D4(2, 40),
    SWEA_SCORE_D5_D6(3, 200),
    SWEA_SCORE_D7(4, 1000),
    SWEA_SCORE_D8(5, 3000);

    private final int level;
    private final int algoScore;

    AlgoScoreEnum(int level, int algoScore) {
        this.level = level;
        this.algoScore = algoScore;
    }

    public int getLevel() {
        return level;
    }

    public int getAlgoScore() {
        return algoScore;
    }
}
