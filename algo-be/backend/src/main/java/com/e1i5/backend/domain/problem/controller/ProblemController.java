package com.e1i5.backend.domain.problem.controller;

import com.e1i5.backend.domain.problem.model.entity.ProblemSite;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemDetailResponse;
import com.e1i5.backend.domain.problem.response.SolvedProblemListResponse;
import com.e1i5.backend.domain.problem.service.ProblemService;
import com.e1i5.backend.domain.problem.service.SolvedProblemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.security.Principal;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/v1/solved-problems")
@Slf4j
public class ProblemController {


    @Autowired
    ProblemService problemService;

    @Autowired
    SolvedProblemService solvedProblemService;

    @PostMapping("/baekjoon")
    public ResponseEntity<Void> saveBojProblem(
            @RequestBody SolvedProblemRequest problem, Principal principal){
        int userId = Integer.parseInt(principal.getName());

        log.info("ProblemController 백준 SolvedProblemRequest problem: {}", problem.toString());

        solvedProblemService.saveBOJSolvedProblemAndProblem(problem,
                ProblemSite.BAEKJOON.getProblemSite(), userId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/programmers")
//    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Void> saveProgrammersProblem(
            @RequestBody SolvedProblemRequest problem, Principal principal){
        int userId = Integer.parseInt(principal.getName());

        log.info("ProblemController 프로그래머스 SolvedProblemRequest problem: {}", problem.toString());

        solvedProblemService.saveNotBOJSolvedProblemAndProblem(problem,
                ProblemSite.PROGRAMMERS.getProblemSite(), userId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/swea")
    public ResponseEntity<Void> saveSWEA(
            @RequestBody SolvedProblemRequest problem, Principal principal){
        int userId = Integer.parseInt(principal.getName());

        log.info("ProblemController SWEA SolvedProblemRequest problem: {}", problem.toString());

        solvedProblemService.saveNotBOJSolvedProblemAndProblem(problem, ProblemSite.SWEA.getProblemSite(), userId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 사용자가 푼 문제 리스드 가져오기
     * @param nickname
     * @return
     * @throws Exception
//     */
    @GetMapping("/mysolved")
    public ResponseEntity<List<SolvedProblemListResponse>> getSolvedProblemList(
            @RequestParam String nickname, Pageable pageable){

        List<SolvedProblemListResponse> solvedProblemListByUser = solvedProblemService.getSolvedProblemListByUser(nickname, pageable);

        return new ResponseEntity<>(solvedProblemListByUser, HttpStatus.OK);
    }

    /**
     * 사용자가 푼 문제 상세 정보 조회
     * @param username 해당 문제 푼 사용자
     * @return 사용자가 푼 문제 데이터
     */
    @GetMapping("/mysolved/detail")
    public ResponseEntity<SolvedProblemDetailResponse> getSolvedDetail(
            @RequestParam("username") int username, @RequestParam("solvednum") int solvedProblemId){
        //TODO 현재 로그인한 사람과 같은지 검사 or username 필요 없음
        SolvedProblemDetailResponse solvedProblemDetail = solvedProblemService.getSolvedProblemDetail(solvedProblemId);
        return new ResponseEntity<>(solvedProblemDetail, HttpStatus.OK);
    }

    /**
     * 사용자가 푼 문제 메모 수정
     * @param solvedProblemId 수정할 문제 인덱스
     * @param memo 수정할 메모
     * @return 수정한 푼 문제 데이터
     */
    @PutMapping("/mysolved")
    public ResponseEntity<SolvedProblemDetailResponse> updateSolvedProblemMemo(
            @RequestParam String nickname, @RequestParam("solvednum") int solvedProblemId, String memo, Principal principal){

        // nickname 필요없음
        int userId = Integer.parseInt(principal.getName());

        SolvedProblemDetailResponse solvedProblemDetail =
                solvedProblemService.updateSolvedProblem(userId, solvedProblemId, memo);

        return new ResponseEntity<>(solvedProblemDetail, HttpStatus.OK);
    }

    /**
     * 푼 문제 숨기기
     * @param username 사용자 이름
     * @param solvedProblemId 수정할 문제 인덱스
     * @return 수정한 푼 문제 데이터
     */
    @PutMapping("/visible")
    public ResponseEntity<SolvedProblemDetailResponse> updateVisibility(
            @RequestParam("username") int username, @RequestParam("solvednum") int solvedProblemId, Principal principal) {

        int userId = Integer.parseInt(principal.getName());
        //username 필요없음
        SolvedProblemDetailResponse solvedProblemDetail = solvedProblemService.updateVisibility(userId, solvedProblemId);

        return new ResponseEntity<>(solvedProblemDetail, HttpStatus.OK);
    }

    /**
     * solved.ac에서 데이터 받아와서 분류하고 저장하는 메서드
     */
    // TODO solved.ac test
    @GetMapping("/solved-ac")
    public void saveSolvedAcApiProblem() {
        problemService.saveBojProblemAndClassification(3);
    }

}
