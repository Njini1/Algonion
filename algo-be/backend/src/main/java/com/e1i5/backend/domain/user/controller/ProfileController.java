package com.e1i5.backend.domain.user.controller;


import com.e1i5.backend.domain.user.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/profile")
@Slf4j
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping("/profile-img")
    public ResponseEntity<Void> saveUserProfile(MultipartFile profileImg) {
        profileService.saveUserProfile(profileImg);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
