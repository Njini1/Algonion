package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import com.e1i5.backend.domain.user.dto.response.AlgoScoreCountResponse;
import com.e1i5.backend.domain.user.dto.response.DashBoardProblemListResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.repository.DashboardRepository;
import com.e1i5.backend.domain.user.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private DashboardRepository dashboardRepository;

    @Autowired
    private SolvedProblemRepository solvedProblemRepo;

    @Override
    public List<DashBoardProblemListResponse> getProblemsByNickname(String nickname) {
        int userId = getUserIdByNickname(nickname);

        List<Problem> solvedProblemsList = dashboardRepository.findProblemsByNicknameOrderedByLevel(userId);

        // Entity를 Response로 변환
        List<DashBoardProblemListResponse> responseList = solvedProblemsList.stream()
                .map(DashBoardProblemListResponse::new)
                .collect(Collectors.toList());

        return responseList;
    }

    @Override
    public int[] getAlgoScoreCountsByNickname(String nickname) {
        int userId = getUserIdByNickname(nickname);

        List<Object[]> algoScoreCounts = dashboardRepository.findAlgoScoreCountsByUserId(userId);

        // 알고리즘 점수에 대한 카운트를 Map으로 매핑
        Map<Integer, Integer> algoScoreMap = algoScoreCounts.stream()
                .collect(Collectors.toMap(
                        data -> Integer.parseInt(String.valueOf(data[0])),
                        data -> ((Number) data[1]).intValue(),
                        Integer::sum));

        System.out.println(algoScoreCounts);
        // 특정 알고리즘 점수에 대한 배열 생성
        int[] responseArray = {
                algoScoreMap.getOrDefault(0, 0),
                algoScoreMap.getOrDefault(1, 0),
                algoScoreMap.getOrDefault(8, 0),
                algoScoreMap.getOrDefault(40, 0),
                algoScoreMap.getOrDefault(200, 0),
                algoScoreMap.getOrDefault(1000, 0),
                algoScoreMap.getOrDefault(3000, 0)
        };

        // 0보다 큰 경우에만 AlgoScoreCountResponse를 생성하여 리스트에 추가
        List<AlgoScoreCountResponse> responseList = Arrays.stream(responseArray)
                .filter(count -> count > 0)
                .mapToObj(AlgoScoreCountResponse::new)
                .collect(Collectors.toList());

        return responseArray;
    }

    private int getUserIdByNickname(String nickname) {
        return userInfoRepository.findByNickname(nickname)
                .orElseThrow(() -> new RuntimeException("User not found for nickname: " + nickname))
                .getUserId();
    }


    /**
     * 스트릭 만드는 메서드
     * @param userName
     * @return
     */
    @Override
    public Map<String, Long> makeStreak(String userName, String startDate, String endDate) {
        List<StreakResponseInterface> streak =
                solvedProblemRepo.findSubmissionTimeAndCountByUserId(userName, startDate, endDate);

        LinkedHashMap<String, Long> result = new LinkedHashMap <>();
        for (StreakResponseInterface streakDate : streak) {
            result.put(streakDate.getSubmissionTime(), streakDate.getCount());
        }

        return result;
    }

    public String makeAccumulatedNumGraph() {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        // data: [30, 40, 45, 50, 49, 60, 70, 91]
        return null;
    }

    /**
     * 통계를 위해 날짜 데이터를 만드는 함수
     * @param totalDays 원하는 날짜 총일수
     * @return key는 날짜, value는 문제 푼 개수
     */
    public Map<String, Long> makeDateList(int totalDays) {
        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusDays(totalDays - 1); // 365일이면 364를 입력

        LinkedHashMap <String, Long> result = new LinkedHashMap <>();
        for (int i = 0; i < totalDays; i++) {
            result.put(startDate.plusDays(i).toString(), 0L);
        }

        return result;
    }
}