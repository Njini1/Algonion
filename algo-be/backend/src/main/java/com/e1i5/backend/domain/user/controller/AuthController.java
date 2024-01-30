package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.request.CreateAccessTokenRequest;
import com.e1i5.backend.domain.user.dto.response.CreateAccessTokenResponse;
import com.e1i5.backend.domain.user.service.AuthServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/user")
@Slf4j
public class AuthController {


    @Value("${file.path.nodeValue}")
    private String UPLOAD_PATH;


    @Autowired
    private AuthServiceImpl authService;

    @PostMapping("/profile")
    public ResponseEntity<?> saveUserProfile(MultipartFile profileImg) {
        //TODO File값이 null일 때 처리
        String saveFileName = "";
        String originalFileName = "";
        if (profileImg != null) {
            File folder = new File(UPLOAD_PATH);
            if (!folder.exists())
                folder.mkdirs();

            originalFileName = profileImg.getOriginalFilename();
            if (!originalFileName.isEmpty()) {
                saveFileName = UUID.randomUUID().toString()
                        + originalFileName.substring(originalFileName.lastIndexOf('.'));
//					logger.debug("원본 파일 이름 : {}, 실제 저장 파일 이름 : {}", fileInfo.getOriginalFilename(), saveFileName);
                try {
                    profileImg.transferTo(new File(folder, saveFileName));
                } catch (IllegalStateException e) {
                    System.out.println("파일 업로드 에러");
                    e.printStackTrace();
                } catch (IOException e) {
                    System.out.println("파일 업로드 에러");
                    e.printStackTrace();
                }
            }
        }
        try {
            authService.saveUserProfile(originalFileName, saveFileName);
            return new ResponseEntity<Void>(HttpStatus.CREATED);
        } catch (Exception e) {
            return exceptionHandling(e);
        }
    }

    @PostMapping("/token")
    public ResponseEntity<CreateAccessTokenResponse> createNewAccessToken(@RequestBody CreateAccessTokenRequest request) {
//        String newAccessToken = tokenService.createNewAccessToken(request.getRefreshToken());
        String newAccessToken = authService.createNewAccessToken(request.getRefreshToken());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CreateAccessTokenResponse(newAccessToken));
    }

    private ResponseEntity<String> exceptionHandling(Exception e) {
        e.printStackTrace();
        return new ResponseEntity<String>("Error : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
