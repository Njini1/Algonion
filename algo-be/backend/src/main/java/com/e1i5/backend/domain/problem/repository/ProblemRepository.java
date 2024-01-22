package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.request.SolvedProblemRequest;
import com.e1i5.backend.domain.problem.response.SolvedProblemResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProblemRepository extends JpaRepository<SolvedProblem, Long> {
    List<SolvedProblem> findAllByUserNoAndIsDelete(String userNo, boolean isDelete);
    List<SolvedProblem> findAllByUserNoAndLevel(String userNo, String level);
}
