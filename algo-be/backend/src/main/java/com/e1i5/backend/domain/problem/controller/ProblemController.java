package com.e1i5.backend.domain.problem.controller;

import com.e1i5.backend.domain.problem.model.entity.ProblemSite;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemDetailResponse;
import com.e1i5.backend.domain.problem.response.SolvedProblemListResponse;
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
@RequestMapping("api/v1/solved-problems")
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
        solvedProblemService.saveSolvedProblemAndProblem(problem, ProblemSite.BAEKJOON.getProblemSite());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/programmers")
    public ResponseEntity<Void> saveProgrammersProblem(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController 프로그래머스 SolvedProblemRequest problem: {}", problem.toString());
        solvedProblemService.saveSolvedProblemAndProblem(problem, ProblemSite.PROGRAMMERS.getProblemSite());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/swea")
    public ResponseEntity<Void> saveSWEA(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController SWEA SolvedProblemRequest problem: {}", problem.toString());
        solvedProblemService.saveSolvedProblemAndProblem(problem, ProblemSite.SWEA.getProblemSite());
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
    public SolvedProblemDetailResponse getSolvedDetail(@RequestParam("username") int username, @RequestParam("solvednum") int solvedProblemId){
        //TODO 현재 로그인한 사람과 같은지 검사
        return solvedProblemService.getSolvedProblemDetail(username, solvedProblemId);
    }

    @PutMapping("/mysolved")
    public SolvedProblemDetailResponse updateSolvedProblemMemo(@RequestParam("username") int username, @RequestParam("solvednum") int solvedProblemId, String memo){
        return solvedProblemService.updateSolvedProblem(solvedProblemId, memo);
    }

    // TODO solved.ac test
    @GetMapping("/solved-ac")
    public void saveSolvedAcApiProblem() {
        problemService.saveBojProblemAndClassification(2);
    }
}
