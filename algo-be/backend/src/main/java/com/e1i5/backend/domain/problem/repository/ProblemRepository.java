package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
}