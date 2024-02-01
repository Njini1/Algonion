package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface ProblemRepository extends JpaRepository<Problem, Integer> {
    Optional<Problem> findByProblemNumAndSiteName(String problemNum, String siteName);
}
