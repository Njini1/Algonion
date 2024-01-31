package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DashboardRepository extends JpaRepository<Problem, Integer> {
    @Query("SELECT DISTINCT p.problemId " +
            "FROM SolvedProblem sp " +
            "JOIN sp.problem p " +
            "WHERE sp.user.userId = :userId")
    List<Integer> findDistinctProblemIdsByUserId(int userId);

    @Query("SELECT sp FROM SolvedProblem sp " +
            "WHERE sp.user.userId = :userId")
    List<SolvedProblem> findSolvedProblemsByUserId(@Param("userId") int userId);


    List<Problem> findAllByProblemIdIn(List<Integer> problemIds);

    List<Problem> findTop100ByOrderByProblemLevelDesc();
}
