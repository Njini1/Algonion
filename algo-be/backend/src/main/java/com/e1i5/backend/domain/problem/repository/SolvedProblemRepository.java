package com.e1i5.backend.domain.problem.repository;

import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

public interface SolvedProblemRepository extends JpaRepository<SolvedProblem, Integer> {

    Optional<SolvedProblem> findBySubmissionId(String submissionId);

    @Query("SELECT sp " +
            "FROM SolvedProblem sp " +
            "JOIN FETCH sp.problem " +
            "WHERE sp.visible = :visible " +
            "AND sp.user.nickname = :nickname")
    Page<SolvedProblem> findAllByUser_NicknameAndVisible(String nickname, boolean visible, Pageable pageable);

    boolean existsByUser_UserIdAndProblem_ProblemId(int userId, int problemId);

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

    @Query("SELECT COUNT(sp) " +
            "FROM SolvedProblem sp " +
            "JOIN sp.user u " +
            "WHERE u.nickname = :nickname AND sp.visible = true")
    int countVisibleSolvedProblemsByUserNickname(@Param("nickname") String nickname);

    @Query("SELECT sp.user.userId " +
            "FROM SolvedProblem sp " +
            "WHERE sp.problem.problemId = :problemId")
    List<Integer> findDistinctUsersByProblem_ProblemId(@Param("problemId") int problemId);

    @Query("SELECT COUNT(DISTINCT sp.problem.problemId) " +
            "FROM SolvedProblem sp " +
            "WHERE sp.user.userId = :userId")
    Long countUserSolvedProblem(int userId);

    boolean existsByUser_UserIdAndProblem_SiteNameAndProblem_ProblemNum(int userId, String siteName, String problemNum);

}
