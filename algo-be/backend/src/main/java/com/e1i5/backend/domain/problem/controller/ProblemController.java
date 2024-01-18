package com.e1i5.backend.domain.problem.controller;

import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.service.ProblemService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/solvedProblem")
@Slf4j
public class ProblemController {

    private static final Logger logger = LoggerFactory.getLogger(ProblemController.class);

    @Autowired
    ProblemService problemService;

    @PostMapping("/programmers")
    public ResponseEntity<Void> saveProgrammersProblem(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController 프로그래머스 SolvedProblemRequest problem: {}", problem.toString());
        problemService.saveProblem(problem);

        SolvedProblemRequest test = SolvedProblemRequest.builder().title("sdf").selectedLanguage("jav").code("code").level("sdf").build();
//        System.out.println("test 값 : " + test.toString());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/boj")
    public ResponseEntity<Void> saveBojProblem(@RequestBody SolvedProblemRequest problem) throws Exception {
        log.info("ProblemController 백준 SolvedProblemRequest problem: {}", problem.toString());
//        problemService.saveProblem(problem);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
