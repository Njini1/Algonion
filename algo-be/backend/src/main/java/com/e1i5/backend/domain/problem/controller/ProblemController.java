package com.e1i5.backend.domain.problem.controller;

import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemResponse;
import com.e1i5.backend.domain.problem.service.ProblemService;
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

    @PostMapping("/baekjoon")
    public ResponseEntity<String> saveBojProblem(@RequestBody SolvedProblemRequest request) throws Exception {
        log.info("ProblemController 백준 SolvedProblemRequest problem: {}", request.toString());
        problemService.saveSolvedProblem(request, "boj");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/programmers")
    public ResponseEntity<Void> saveProgrammersProblem(@RequestBody SolvedProblemRequest request) throws Exception {
        log.info("ProblemController 프로그래머스 SolvedProblemRequest problem: {}", request.toString());
        problemService.saveSolvedProblem(request, "programmers");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/swea")
    public ResponseEntity<Void> saveSWEA(@RequestBody SolvedProblemRequest request) throws Exception {
        log.info("ProblemController SWEA SolvedProblemRequest problem: {}", request.toString());
        problemService.saveSolvedProblem(request, "swea");
        return new ResponseEntity<>(HttpStatus.OK);
    }






    @GetMapping("/mysolved")
    public List<SolvedProblemResponse> getSolved(@RequestParam long username) throws Exception {
        return problemService.getSolvedProblem(username);
    }

    @GetMapping("/mysolved/detail")
    public SolvedProblemResponse getSolvedDetail(@RequestParam long username, long solvednum) throws Exception {
        return problemService.getSolvedProblemDetail(username, solvednum);
    }
}
