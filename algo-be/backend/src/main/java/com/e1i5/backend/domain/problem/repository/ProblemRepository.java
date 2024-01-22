package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProblemRepository extends JpaRepository<SolvedProblem, Long> {
    List<SolvedProblem> findAllByUserNoAndVisible(long userNo, boolean visible);
    SolvedProblem findAllBySolvedProblemIdxAndUserNo(long solvedProblemIdx, long userNo);
}
