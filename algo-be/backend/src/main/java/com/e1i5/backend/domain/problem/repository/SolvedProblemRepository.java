package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SolvedProblemRepository extends JpaRepository<SolvedProblem, Integer> {

    Optional<SolvedProblem> findBySubmissionId(String submissionId);
    List<SolvedProblem> findAllByUser_UserIdAndVisible(int userId, boolean visible);

    @Query("SELECT minTime AS submissionTime, COUNT(*) AS count " +
            "FROM (SELECT sp.user.userId AS userId, MIN(sp.submissionTime) AS minTime " +
            "      FROM SolvedProblem sp " +
            "      WHERE sp.user.userId = :userId " +
            "      GROUP BY sp.problem.problemId)" +
            "WHERE minTime <= :endDate " +
            "AND minTime > :startDate " +
            "GROUP BY minTime " +
            "ORDER BY minTime")
    List<StreakResponseInterface> findSubmissionTimeAndCountByUserId(@Param("userId") int userId,
                                                      @Param("endDate") String endDate,
                                                      @Param("startDate") String startDate);
}
