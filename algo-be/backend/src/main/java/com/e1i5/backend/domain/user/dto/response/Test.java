package com.e1i5.backend.domain.user.dto.response;

import com.e1i5.backend.domain.user.entity.ProfileFileInfo;

/**
 * 실패
 */
public interface Test {
    String getTier();
    Integer getUserId();
    Integer getScore();
    ProfileFileInfo getUserProfile();
    Long getProblemCount();
}
