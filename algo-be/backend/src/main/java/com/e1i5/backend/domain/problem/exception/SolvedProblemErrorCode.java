package com.e1i5.backend.domain.problem.exception;

import lombok.Getter;

@Getter
public enum SolvedProblemErrorCode {
    UNEXPECTED_SOLVEDPROBLEM("S400", "풀지 않은 문제입니다.", 401);

    private final String code;
    private final String message;
    private final int status;

    SolvedProblemErrorCode(String code, String message, int status) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}
