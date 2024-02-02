package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface SolvedProblemRepository extends JpaRepository<SolvedProblem, Integer> {
//    List<SolvedProblem> findAllByUserNoAndVisible(long userNo, boolean visible);
//    SolvedProblem findAllBySolvedProblemIdxAndUserNo(long solvedProblemIdx, long userNo);

    Optional<SolvedProblem> findBySubmissionId(String submissionId);
    List<SolvedProblem> findAllByUser_UserIdAndVisible(int userId, boolean visible);
//    @Query("SELECT s.submissionTime AS submissionTime, COUNT(s.submissionTime) AS count " +
//            "FROM SolvedProblem s " +
//            "WHERE s.user.userId = :userId " +
//            "GROUP BY s.submissionTime " +
//            "ORDER BY s.submissionTime DESC")
    @Query("SELECT minTime AS submissionTime, COUNT(*) AS count " +
            "FROM (SELECT sp.user.userId AS userId, MIN(sp.submissionTime) AS minTime " +
            "      FROM SolvedProblem sp " +
            "      WHERE sp.user.userId = :userId " +
            "      GROUP BY sp.problem.problemId)" +
            "GROUP BY minTime " +
            "ORDER BY minTime")
    List<StreakResponseInterface> findSubmissionTimeAndCountByUserId(@Param("userId") int userId);

    @Query("SELECT minTime AS submissionTime, COUNT(*) AS count " +
            "FROM (SELECT sp.user.userId AS userId, MIN(sp.submissionTime) AS minTime " +
            "      FROM SolvedProblem sp " +
            "      WHERE sp.user.userId = :userId " +
            "      GROUP BY sp.problem.problemId)" +
            "WHERE minTime <= :endDate " +
            "AND minTime > :startDate " +
            "GROUP BY minTime " +
            "ORDER BY minTime")
    List<StreakResponseInterface> findSevenDaysStreak(@Param("userId") int userId,
                                      @Param("endDate") String endDate,
                                      @Param("startDate") String startDate);
}
