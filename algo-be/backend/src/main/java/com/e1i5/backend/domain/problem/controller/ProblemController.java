package com.e1i5.backend.domain.problem.controller;

import com.e1i5.backend.domain.problem.model.entity.ProblemSite;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemDetailResponse;
import com.e1i5.backend.domain.problem.response.SolvedProblemListResponse;
import com.e1i5.backend.domain.problem.response.StreakResponseInterface;
import com.e1i5.backend.domain.problem.service.ProblemService;
import com.e1i5.backend.domain.problem.service.SolvedProblemService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/solved-problems")
@Slf4j
public class ProblemController {

    private static final Logger logger = LoggerFactory.getLogger(ProblemController.class);

    @Autowired
    ProblemService problemService;

    @Autowired
    SolvedProblemService solvedProblemService;

    @PostMapping("/baekjoon")
    public ResponseEntity<Void> saveBojProblem(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController 백준 SolvedProblemRequest problem: {}", problem.toString());
        solvedProblemService.saveBOJSolvedProblemAndProblem(problem, ProblemSite.BAEKJOON.getProblemSite());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/programmers")
    public ResponseEntity<Void> saveProgrammersProblem(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController 프로그래머스 SolvedProblemRequest problem: {}", problem.toString());
        solvedProblemService.saveNotBOJSolvedProblemAndProblem(problem, ProblemSite.PROGRAMMERS.getProblemSite());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/swea")
    public ResponseEntity<Void> saveSWEA(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController SWEA SolvedProblemRequest problem: {}", problem.toString());
        solvedProblemService.saveNotBOJSolvedProblemAndProblem(problem, ProblemSite.SWEA.getProblemSite());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 사용자가 푼 문제 리스드 가져오기
     * @param username
     * @return
     * @throws Exception
//     */
    @GetMapping("/mysolved")
    public ResponseEntity<List<SolvedProblemListResponse>> getSolved(@RequestParam String username){
        List<SolvedProblemListResponse> solvedProblemListByUser = solvedProblemService.getSolvedProblemListByUser();
        return new ResponseEntity<>(solvedProblemListByUser, HttpStatus.OK);
    }

    /**
     * 사용자가 푼 문제 상세 정보 조회
     * @param username 해당 문제 푼 사용자
     * @return 사용자가 푼 문제 데이터
     */
    @GetMapping("/mysolved/detail")
    public ResponseEntity<SolvedProblemDetailResponse> getSolvedDetail(@RequestParam("username") int username, @RequestParam("solvednum") int solvedProblemId){
        //TODO 현재 로그인한 사람과 같은지 검사
        SolvedProblemDetailResponse solvedProblemDetail = solvedProblemService.getSolvedProblemDetail(username, solvedProblemId);
        return new ResponseEntity<>(solvedProblemDetail, HttpStatus.OK);
    }

    /**
     * 사용자가 푼 문제 메모 수정
     * @param username 사용자 이름
     * @param solvedProblemId 수정할 문제 인덱스
     * @param memo 수정할 메모
     * @return 수정한 푼 문제 데이터
     */
    @PutMapping("/mysolved")
    public ResponseEntity<SolvedProblemDetailResponse> updateSolvedProblemMemo(@RequestParam("username") int username, @RequestParam("solvednum") int solvedProblemId, String memo){
        SolvedProblemDetailResponse solvedProblemDetail = solvedProblemService.updateSolvedProblem(solvedProblemId, memo);
        return new ResponseEntity<>(solvedProblemDetail, HttpStatus.OK);
    }

    /**
     * 푼 문제 숨기기
     * @param username 사용자 이름
     * @param solvedProblemId 수정할 문제 인덱스
     * @return 수정한 푼 문제 데이터
     */
    @PutMapping("/visible")
    public ResponseEntity<SolvedProblemDetailResponse> updateVisibility(@RequestParam("username") int username, @RequestParam("solvednum") int solvedProblemId) {
        SolvedProblemDetailResponse solvedProblemDetail = solvedProblemService.updateVisibility(solvedProblemId);
        return new ResponseEntity<>(solvedProblemDetail, HttpStatus.OK);
    }

    /**
     * solved.ac에서 데이터 받아와서 분류하고 저장하는 메서드
     */
    // TODO solved.ac test
    @GetMapping("/solved-ac")
    public void saveSolvedAcApiProblem() {
        problemService.saveBojProblemAndClassification(2);
    }

    /**
     * 스트릭 만드는 메서드
     * @param username
     * @return 날짜와 그 날짜에 푼 문제 개수 리스트 반환
     */
    @GetMapping("/streak")
    public ResponseEntity<List<StreakResponseInterface>> getStreak(@RequestParam("username") String username) {
        List<StreakResponseInterface> streakResponses = solvedProblemService.makeStreak(2);
        return new ResponseEntity<>(streakResponses, HttpStatus.OK);
    }
    
    @GetMapping("/test")
    public ResponseEntity<Void> test() {
        System.out.println("test입니당");
        return new ResponseEntity<>(HttpStatus.OK);
    };
}
