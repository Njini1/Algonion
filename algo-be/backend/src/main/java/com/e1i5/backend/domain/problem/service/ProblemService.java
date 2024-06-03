package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.entity.Problem;

import java.util.List;

public interface ProblemService {
    int getOldAlgoScore(String problemNum, String siteName);
    Problem saveOrUpdateBojProblem(Problem problem, String siteName, List<String> problemCategories);
    Problem saveOrUpdateProblem(Problem problem, String siteName, List<String> problemCategories);
    void saveBojProblemAndClassification(int problemNum);

}
