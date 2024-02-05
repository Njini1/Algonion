package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.repository.ProblemRepository;
import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import com.e1i5.backend.domain.problem.response.ProblemResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.dto.response.UserInfoResponse;
import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import com.e1i5.backend.domain.user.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;

@RequiredArgsConstructor
@Service
public class ProfileServiceImpl implements ProfileService {

    @Value("${file.path.nodeValue}")
    private String UPLOAD_PATH;

    private final UserProfileRepository userProfileRepo;
    private final SolvedProblemRepository solvedProblemRepo;
    private final AuthRepository authRepo;
    private final ProblemRepository problemRepo;

    @Override
    public void saveUserProfile(int userId, MultipartFile profileImg) {
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

        User user = authRepo.findById(userId).orElseThrow(()-> new IllegalArgumentException("Unexpected user"));

        userProfileRepo.save(ProfileFileInfo.builder()
                .saveFile(saveFileName)
                .originalFile(originalFileName)
                .user(user).build());
    }

    /**
     * 스트릭 만드는 메서드
     * @param userName
     * @return
     */
    @Override
    public Map<String, Long> makeStreak(String userName, String startDate, String endDate) {
        //TODO 7일씩 나눠서 마지막 7일에는 0으로 값을 채워놔야함
        List<StreakResponseInterface> streak =
                solvedProblemRepo.findSubmissionTimeAndCountByUserId(userName, startDate, endDate);

        LinkedHashMap <String, Long> result = new LinkedHashMap <>();
        for (StreakResponseInterface streakDate : streak) {
            result.put(streakDate.getSubmissionTime(), streakDate.getCount());
        }

        return result;
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

        List<StreakResponseInterface> streak =
                solvedProblemRepo.findSevenDaysStreak(userId, endDate.toString(), startDate.toString());

        LinkedHashMap <String, Long> result = new LinkedHashMap <>();
        for (int i = 0; i < 7; i++) {
            result.put(startDate.plusDays(i).toString(), 0L);
        }

        for (StreakResponseInterface streakDate : streak) {
            result.put(streakDate.getSubmissionTime(), streakDate.getCount());
        }

        return result;
    }

    /**
     * 사용자 프로필 정보 불러오기
     * @param nickname 사용자 닉네임
     * @return 사용자 아이디, 티어, 점수, 프로필 이미지, 문제 푼 개수
     */
    @Override
    public UserInfoResponse getUserInfo(String nickname) {
        UserInfoResponse user = authRepo.getUserByNickname(nickname)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));

        return user;
    }

    @Override
    public List<ProblemResponse> recommandProblem(int userId) {
        //TODO 랜덤으로 문제 추천으로 변경
        List<ProblemResponse> unsolvedProblemsByUserId = new ArrayList<>
                (problemRepo.findUnsolvedProblemsByUserId(userId)
                .stream()
                .limit(2)
                .toList());
//        Collections.shuffle(unsolvedProblemsByUserId);
        for (ProblemResponse p : unsolvedProblemsByUserId) {
            System.out.println(p.getProblemTitle());
        }
        return unsolvedProblemsByUserId;
    }

}
