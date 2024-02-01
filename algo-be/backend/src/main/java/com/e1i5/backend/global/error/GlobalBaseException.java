package com.e1i5.backend.global.error;

public class GlobalBaseException extends RuntimeException {
    private final GlobalErrorCode errorCode;

    public GlobalBaseException(String message, GlobalErrorCode errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public GlobalBaseException(GlobalErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public GlobalErrorCode getErrorCode() {
        return errorCode;
    }

}