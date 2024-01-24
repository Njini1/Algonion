package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
//    List<SolvedProblem> findAllByUserNoAndVisible(long userNo, boolean visible);
//    SolvedProblem findAllBySolvedProblemIdxAndUserNo(long solvedProblemIdx, long userNo);
    Optional<Problem> findBySiteNameAndProblemNum(String siteName, String problemNum);
}
