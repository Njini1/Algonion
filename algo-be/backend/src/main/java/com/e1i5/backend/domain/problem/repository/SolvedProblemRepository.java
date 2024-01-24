package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SolvedProblemRepository  extends JpaRepository<SolvedProblem, Long> {

}
