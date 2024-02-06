package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import com.e1i5.backend.domain.user.dto.response.AccCountGraphResponse;
import com.e1i5.backend.domain.user.dto.response.AlgoScoreCountResponse;
import com.e1i5.backend.domain.user.dto.response.DashBoardProblemListResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.repository.DashboardRepository;
import com.e1i5.backend.domain.user.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
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

    /**
     * 누적 문제 푼 개수 합 그래프
     * @param nickname 원하는 사용자의 그래프
     * @return 날짜 배열과 누적 합 배열을 담은 스트링 반환
     */
    public String makeAccumulatedNumGraph(String nickname) {
        
        int totalDays = 365;

        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusDays(totalDays - 1);

        List<StreakResponseInterface> streak =
                solvedProblemRepo.findSubmissionTimeAndCountByUserId(nickname, startDate.toString(), endDate.toString());

        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        String[] categories = new String[totalDays];
        for (int i = 0; i < totalDays; i++) {
            categories[i] = startDate.plusDays(i).toString();
        }

        LinkedHashMap<String, Long> dateList = makeDateList(totalDays);

        for (StreakResponseInterface s : streak) {
            dateList.put(s.getSubmissionTime(), s.getCount());
        }

        // data: [30, 40, 45, 50, 49, 60, 70, 91]
        long[] data = new long[totalDays];
        long countSum = 0;

        for (int i = 0; i < totalDays; i++) {
            countSum += dateList.get(startDate.plusDays(i).toString());
            data[i] = countSum;
        }
        System.out.println("categories: " + categories.toString());
        System.out.println("data: " + data.toString());

        AccCountGraphResponse graphData = AccCountGraphResponse.builder()
                .width(2)
                .curve("stepline")
                .chartId("basic-bar")
                .colors("#9f22ff")
                .data(data.toString())
                .categories(categories.toString()).build();

        System.out.println("그래프 : " + graphData.toString());
        return graphData.toString();
    }

    /**
     * 통계를 위해 날짜 데이터를 만드는 함수
     * @param totalDays 원하는 날짜 총일수
     * @return key는 날짜, value는 문제 푼 개수
     */
    public LinkedHashMap<String, Long> makeDateList(int totalDays) {
        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusDays(totalDays - 1); // 365일이면 364를 입력

        LinkedHashMap <String, Long> result = new LinkedHashMap <>();
        for (int i = 0; i < totalDays; i++) {
            result.put(startDate.plusDays(i).toString(), 0L);
        }

        return result;
    }
}