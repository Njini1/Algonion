package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DashboardRepository extends JpaRepository<Problem, Integer> {
    @Query("SELECT DISTINCT p " +
            "FROM SolvedProblem sp " +
            "JOIN sp.problem p " +
            "WHERE sp.user.userId = :userId " +
            "ORDER BY p.problemLevel DESC " +
            "LIMIT 2")
    List<Problem> findProblemsByNicknameOrderedByLevel(@Param("userId") int userId);
}
