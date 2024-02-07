package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.response.ProblemResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface ProblemRepository extends JpaRepository<Problem, Integer> {
    Optional<Problem> findByProblemNumAndSiteName(String problemNum, String siteName);
//    Integer findAlgoScoreByProblemId(int problemId);
    @Query("SELECT new com.e1i5.backend.domain.problem.response.ProblemResponse(" +
            "p.siteName, p.problemNum, p.problemTitle, p.problemLevel, p.url) " +
            "FROM Problem p " +
            "WHERE p.problemId NOT IN " +
            "(SELECT sp.problem.problemId " +
            "FROM SolvedProblem sp " +
            "WHERE sp.user.userId = :userId)")
    List<ProblemResponse> findUnsolvedProblemsByUserId(@Param("userId") int userId);
}
