package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.request.CreateAccessTokenRequest;
import com.e1i5.backend.domain.user.dto.response.CreateAccessTokenResponse;
import com.e1i5.backend.domain.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/user")
@Slf4j
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserService userService;
//    @Value("${file.path}")
//    private String uploadPath;
//
//    @Value("${file.path.upload-images}")
//    private String uploadImagePath;
//
//    @Value("${file.path.upload-files}")
//    private String uploadFilePath;

//    @PostMapping("/profile")
//    public void saveUserProfile(MultipartFile profileImg) {
//        if (profileImg != null) {
//            String today = new SimpleDateFormat("yyMMdd").format(new Date());
//            String saveFolder = uploadPath + File.separator + today;
//            logger.debug("저장 폴더 : {}", saveFolder);
//            File folder = new File(saveFolder);
//            if (!folder.exists())
//                folder.mkdirs();
//            FileInfoDto fileInfoDto = new FileInfoDto();
//            String originalFileName = fileInfo.getOriginalFilename();
//            if (!originalFileName.isEmpty()) {
//                String saveFileName = UUID.randomUUID().toString()
//                        + originalFileName.substring(originalFileName.lastIndexOf('.'));
//                fileInfoDto.setSaveFolder(today);
//                fileInfoDto.setOriginalFile(originalFileName);
//                fileInfoDto.setSaveFile(saveFileName);
////					logger.debug("원본 파일 이름 : {}, 실제 저장 파일 이름 : {}", fileInfo.getOriginalFilename(), saveFileName);
//                try {
//                    fileInfo.transferTo(new File(folder, saveFileName));
//                } catch (IllegalStateException e) {
//                    System.out.println("파일 업로드 에러");
//                    e.printStackTrace();
//                } catch (IOException e) {
//                    System.out.println("파일 업로드 에러");
//                    e.printStackTrace();
//                }
//            }
//            mapResto.setFileInfo(fileInfoDto);
//        }
//        try {
//            mapRestoService.makeMapResto(mapResto);
//            return new ResponseEntity<Void>(HttpStatus.CREATED);
//        } catch (Exception e) {
//            return exceptionHandling(e);
//        }
//    }

    @PostMapping("/token")
    public ResponseEntity<CreateAccessTokenResponse> createNewAccessToken(@RequestBody CreateAccessTokenRequest request) {
//        String newAccessToken = tokenService.createNewAccessToken(request.getRefreshToken());
        String newAccessToken = userService.createNewAccessToken(request.getRefreshToken());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CreateAccessTokenResponse(newAccessToken));
    }

}
