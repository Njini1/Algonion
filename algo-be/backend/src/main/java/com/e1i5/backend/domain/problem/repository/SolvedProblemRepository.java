package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SolvedProblemRepository extends JpaRepository<SolvedProblem, Integer> {
//    List<SolvedProblem> findAllByUserNoAndVisible(long userNo, boolean visible);
//    SolvedProblem findAllBySolvedProblemIdxAndUserNo(long solvedProblemIdx, long userNo);

    Optional<SolvedProblem> findBySubmissionId(String submissionId);
//    List<SolvedProblemListResponse> findAllByUser_UserId(int userId);
    List<SolvedProblem> findAllByUser_UserId(int userId);
}
