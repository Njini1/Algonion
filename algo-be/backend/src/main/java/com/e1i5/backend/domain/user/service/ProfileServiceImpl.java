package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import com.e1i5.backend.domain.user.dto.response.StreakResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import com.e1i5.backend.domain.user.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProfileServiceImpl implements ProfileService {

    @Value("${file.path.nodeValue}")
    private String UPLOAD_PATH;

    private final UserProfileRepository userProfileRepo;
    private final SolvedProblemRepository solvedProblemRepo;


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


    /**
     * 스트릭 만드는 메서드
     * @param userId
     * @return
     */
    @Override
    public List<StreakResponseInterface> getUserStreak(int userId) {
        //TODO 7일씩 나눠서 마지막 7일에는 0으로 값을 채워놔야함
        List<StreakResponseInterface> streak = solvedProblemRepo.findSubmissionTimeAndCountByUserId(2);
        return streak;
    }

    /**
     * 확장 프로그램 버전 7일 스트릭
     * @param userId
     * @return
     */
    @Override
    public Map<String, Long> getUserSevenStreak(int userId) {
        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusDays(6);

        List<StreakResponseInterface> streak = solvedProblemRepo.findSevenDaysStreak(2, endDate.toString(), startDate.toString());
        LinkedHashMap <String, Long> result = new LinkedHashMap <>();
        for (int i = 0; i < 7; i++) {
            result.put(startDate.plusDays(i).toString(), 0L);
        }
        for (StreakResponseInterface streakDate : streak) {
            result.put(streakDate.getSubmissionTime(), streakDate.getCount());
        }
        return result;
    }

    @Override
    public StreakResponse makeStreak() {
        List<String> dateList = makeDateList(364);
//        for (String date: dateList) {
//
//        }
        return null;
    }

    public List<String> makeDateList(int totalDate) {
        List<String> dateList = new ArrayList<>();
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("####-##-##");
//
//        LocalDate endDate = LocalDate.now();
//        LocalDate startDate = endDate.minusDays(totalDate);
//
//        while (startDate.isBefore(endDate) || startDate.isEqual(endDate)) {
//            dateList.add(startDate.format(formatter));
//            startDate = startDate.plusDays(1);
//        }
        HashMap<String, Integer> data = new HashMap<>();

//        {
//            name: "sat",
//                    data: [{
//            x: 'W1',
//                    y: 10
//        }, {
//            x: 'W2',
//                    y: 32
//        }, {
//            x: 'W3',
//                    y: 50
//        }, {
//            x: 'W4',
//                    y: 30
//        }]
//        },

        return dateList;
    }

}
