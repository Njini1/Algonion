package com.e1i5.backend.domain.user.dto.response;

import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import lombok.*;

/**
 * 사용자 프로필 불러오기
 * - banner (배너)
 * - profileImg (프로필이미지)
 * - userId (유저 아이디)
 * - tier (티어)
 * - point (점수)
 * - solvedProblemCnt (푼 문제 수)
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class UserInfoResponse {
//    Integer userId; //TODO int할건지, string으로 할건지
//    String tier;
//    Integer score;
//    Long solvedProblemCnt;
//    ProfileFileInfo profileFileInfo;
//
//    public UserInfoResponse(Integer userId, String tier, Integer score, Long solvedProblemCnt, ProfileFileInfo profileFileInfo) {
//        this.userId = userId;
//        this.tier = tier;
//        this.score = score;
//        this.solvedProblemCnt = solvedProblemCnt;
//        this.profileFileInfo = profileFileInfo;
//    }

    private String tier;
    private Integer userId;
    private Integer score;
    private String originalFile;
    private String saveFile;
//    private FileInfoResponse fileInfo;
//    private ProfileFileInfo userProfile;
    private Long problemCount;

        @Builder
    public UserInfoResponse(String tier, Integer userId, Integer score, String originalFile, String saveFile, Long problemCount) {
        this.tier = tier;
        this.userId = userId;
        this.score = score;
        this.originalFile = originalFile;
        this.saveFile = saveFile;
        this.problemCount = problemCount;
    }

    //    @Builder
//    public UserInfoResponse(String userId, String tier, int score, long solvedProblemCnt, ProfileFileInfo profileFileInfo) {
//        this.userId = userId;
//        this.tier = tier;
//        this.score = score;
//        this.solvedProblemCnt = solvedProblemCnt;
//        this.profileFileInfo = profileFileInfo;
//    }
}
