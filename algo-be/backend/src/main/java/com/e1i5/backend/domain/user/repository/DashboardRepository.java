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
            "ORDER BY p.algoScore DESC " +
            "LIMIT 100")
    List<Problem> findProblemsByNicknameOrderedByAlgoScore(@Param("userId") int userId);

    @Query("SELECT sp.problem.algoScore, COUNT(DISTINCT sp.problem.problemId) " +
            "FROM SolvedProblem sp " +
            "WHERE sp.user.userId = :userId " +
            "GROUP BY sp.problem.algoScore " +
            "ORDER BY sp.problem.algoScore ASC")
    List<Object[]> findAlgoScoreCountsByUserId(@Param("userId") int userId);
}
