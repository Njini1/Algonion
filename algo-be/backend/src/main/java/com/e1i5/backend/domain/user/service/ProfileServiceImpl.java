package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import com.e1i5.backend.domain.user.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class ProfileServiceImpl implements ProfileService {

    @Value("${file.path.nodeValue}")
    private String UPLOAD_PATH;

    @Autowired
    private final UserProfileRepository userProfileRepo;

    @Override
    public void saveUserProfile(MultipartFile profileImg) {
        //TODO File값이 null일 때 처리
        //TODO File 확장자도 검사
        //TODO 파일 저장 실패시 에러 처리?
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
        userProfileRepo.save(ProfileFileInfo.builder()
                .saveFile(saveFileName)
                .originalFile(originalFileName).build());
    }
}
