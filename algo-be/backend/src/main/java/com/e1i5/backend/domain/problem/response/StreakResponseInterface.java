package com.e1i5.backend.domain.problem.response;


import java.time.LocalDateTime;
public interface StreakResponseInterface {
    LocalDateTime getSubmissionTime();
    long getCount();

}
