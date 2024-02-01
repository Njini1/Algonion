package com.e1i5.backend.global.util;

import com.e1i5.backend.domain.problem.model.entity.ProblemSite;

public class AlgoScoreUtil {
    public static int getScore(ProblemSite problemSite, int problemLevel) {
        switch (problemSite) {
            case BAEKJOON:
                return getScore(problemLevel, AlgoScoreConstants.BOJ_SCORE_VALUES);
            case PROGRAMMERS:
                return getScore(problemLevel, AlgoScoreConstants.PROGRAMMERS_SCORE_VALUES);
            case SWEA:
                return getScore(problemLevel, AlgoScoreConstants.SWEA_SCORE_VALUES);
            default:
                throw new IllegalArgumentException("Unsupported problem site: " + problemSite);
        }
    }

    private static int getScore(int problemLevel, int[] scoreValues) {
        int index = Math.min(Math.max(problemLevel, 0), scoreValues.length - 1);
        return scoreValues[index];
    }

    private static class AlgoScoreConstants {
        public static final int[] BOJ_SCORE_VALUES = {0, 1, 8, 40, 200, 1000, 3000};
        public static final int[] PROGRAMMERS_SCORE_VALUES = {1, 8, 40, 200, 1000, 3000};
        public static final int[] SWEA_SCORE_VALUES = {1, 8, 40, 200, 1000, 3000};
    }
}
