package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DashboardRepository extends JpaRepository<Problem, Integer> {
    List<Problem> findProblemsByUserId(int userId);

    @Query("SELECT p FROM Problem p WHERE p.problemLevel IS NOT NULL ORDER BY p.problemLevel DESC")
    List<Problem> findTop100ProblemsByUserId(int userId);
}
