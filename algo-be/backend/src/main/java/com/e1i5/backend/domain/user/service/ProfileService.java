package com.e1i5.backend.domain.user.service;

import org.springframework.web.multipart.MultipartFile;

public interface ProfileService {
    void saveUserProfile(MultipartFile profileImg);

}
