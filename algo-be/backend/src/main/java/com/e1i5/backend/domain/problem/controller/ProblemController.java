package com.e1i5.backend.domain.problem.controller;

import com.e1i5.backend.domain.problem.request.BojProblemRequest;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemResponse;
import com.e1i5.backend.domain.problem.service.ProblemService;
import lombok.Getter;
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
@RequestMapping("api/v1/solved-problem")
@Slf4j
public class ProblemController {

    private static final Logger logger = LoggerFactory.getLogger(ProblemController.class);

    @Autowired
    ProblemService problemService;

    @PostMapping("/baekjoon")
    public ResponseEntity<Void> saveBojProblem(@RequestBody BojProblemRequest problem) throws Exception {
        log.info("ProblemController 백준 SolvedProblemRequest problem: {}", problem.toString());
        problemService.saveBoj(problem);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/programmers")
    public ResponseEntity<Void> saveProgrammersProblem(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController 프로그래머스 SolvedProblemRequest problem: {}", problem.toString());
//        problemService.saveProblem(problem, "programmers");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/swea")
    public ResponseEntity<Void> saveSWEA(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController SWEA SolvedProblemRequest problem: {}", problem.toString());
//        problemService.saveProblem(problem, "swea");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    
    //TODO 내가 푼 문제 전체 가져오기 할 예정
    @PostMapping("/getsolved")
    public ResponseEntity<List<SolvedProblemResponse>> getSolved(@RequestBody String userId) throws Exception {
        problemService.getSolvedProblem(userId);
        System.out.println("test");
        return null;
    }
}
