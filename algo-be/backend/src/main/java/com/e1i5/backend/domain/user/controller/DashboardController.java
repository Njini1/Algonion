package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.response.AlgoScoreCountResponse;
import com.e1i5.backend.domain.user.dto.response.DashBoardProblemListResponse;
import com.e1i5.backend.domain.user.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/v1/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    /**
     * 난이도 기준 top100 문제 가져오기
     * @param nickname
     * @return 난이도 상위 100문제 리스트 반환
     */
    @GetMapping("/top100")
    public ResponseEntity<List<DashBoardProblemListResponse>> getProblemsByNickname(@RequestParam("nickname") String nickname) {
        List<DashBoardProblemListResponse> problemsList = dashboardService.getProblemsByNickname(nickname);
        return new ResponseEntity<>(problemsList, HttpStatus.OK);
    }

    /**
     * 난이도별 갯수 가져오기
     * @param nickname
     * @return 난이도 별 갯수 리스트 반환
     */
    @GetMapping("/level-graph")
    public ResponseEntity<int[]> getAlgoScoreCountsByNickname(@RequestParam("nickname") String nickname) {
        int[] algoScoreCounts = dashboardService.getAlgoScoreCountsByNickname(nickname);
        return new ResponseEntity<>(algoScoreCounts, HttpStatus.OK);
    }

    /**
     * 누적 개수 합 그래프
     * @return
     */
    @GetMapping("/problem-stack")
    public ResponseEntity<?> getProblemCountSum(@RequestParam("nickname") String nickname) {
        String graphData = dashboardService.makeAccumulatedNumGraph(nickname);
        return new ResponseEntity<>(graphData, HttpStatus.OK);
    }

}

