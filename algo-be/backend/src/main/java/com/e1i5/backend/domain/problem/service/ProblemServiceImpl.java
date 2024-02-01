package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.model.entity.AlgoGroup;
import com.e1i5.backend.domain.problem.model.entity.Problem;
import com.e1i5.backend.domain.problem.model.entity.ProblemSite;
import com.e1i5.backend.domain.problem.repository.AlgoGroupRepository;
import com.e1i5.backend.domain.problem.repository.ProblemRepository;
import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.*;

@Service
@Slf4j
public class ProblemServiceImpl implements ProblemService {


    @Autowired
    SolvedProblemRepository solvedProblemRepo;
    @Autowired
    ProblemRepository problemRepo;
    @Autowired
    AuthRepository userRepo;
    @Autowired
    AlgoGroupRepository algoGroupRepo;

    private static final String BOJ_URL = "https://www.acmicpc.net/problem/";
    private static final String SOLVEDAC_URL = "https://solved.ac";

    /**
     * solved.ac에서 문제 데이터 받아오기
     * @param problemNum
     */
    @Override
    public void saveBojProblemAndClassification(int problemNum) {
        String code = "myCode";

        // webClient 기본 설정
        WebClient webClient =
                WebClient
                        .builder()
                        .baseUrl(SOLVEDAC_URL)
                        .build();

        // api 요청
        Map response =
                webClient
                        .get()
                        .uri(uriBuilder ->
                                uriBuilder
                                        .path("/api/v3/search/problem")
                                        .queryParam("query", "")
                                        .queryParam("page", problemNum)
                                        .build())
                        .retrieve()
                        .bodyToMono(Map.class)
                        .block();

        assert response != null;
//        log.info(response.toString());
        List<Map<String, Object>> items = (List<Map<String, Object>>) response.get("items");
        List<Problem> problems = new ArrayList<>(); // 받아온 문제들을 넣을 리스트

        for (Map<String, Object> item : items) {
            int problemId = (int) item.get("problemId");
            String titleKo = (String) item.get("titleKo");
            int level = (int) item.get("level");
            List<String> algoGroup = new ArrayList<>();

            List<Map<String, Object>> tags = (List<Map<String, Object>>) item.get("tags");

            for (Map<String, Object> tag : tags) {
                List<Map<String, Object>> displayNames = (List<Map<String, Object>>) tag.get("displayNames");
                algoGroup.add((String) displayNames.get(0).get("name"));
            }

            String url = BOJ_URL + Integer.toString(problemId);
//            System.out.println("ProblemId : " + problemId);
//            System.out.println("Title : " + titleKo);
//            System.out.println("Level : " + level);
//            System.out.println("AlgoGroup : " + algoGroup);
//            System.out.println("url : https://www.acmicpc.net/problem/" + Integer.toString(problemId));
//            System.out.println("====================================================");

            // 1. 문제 저장 -> 이미 있는 값은 레벨만 변경, 없으면 새로 저장
            Problem problem = Problem.builder()
                    .problemNum(Integer.toString(problemId))
                    .problemTitle(titleKo)
                    .problemLevel(Integer.toString(level))
                    .url(url).build();
            problem.updateSiteName(ProblemSite.BAEKJOON.getProblemSite());
            Problem newProblem = saveOrUpdateProblem(problem, ProblemSite.BAEKJOON.getProblemSite());

            // 2. 문제의 인덱스를 가지고 문제 알고리즘 분류
            //TODO 이미 존재하는 문제 분류일 경우 처리 -> 분류는 초기에 할 것이기 때문에 table drop시키고 새로 저장해도 되긴함
            List<AlgoGroup> algoGroupList = new ArrayList<>();
            for (String algo : algoGroup) {
                algoGroupList.add(AlgoGroup.builder()
                        .problem(newProblem)
                        .classification(algo).build());
            }
            algoGroupRepo.saveAll(algoGroupList);
        }

    }

    /**
     * solved.ac 문제에서 이미 존재하면 난이도만 업데이하고 없으면 새로 저장
     * @param problem 백준 문제
     * @param siteName 사이트 이름(혹시 나중에 프로그래머스나 swea도 쓸 수 있으니까)
     * @return 저장한 문제 반환
     */
    @Override
    public Problem saveOrUpdateProblem(Problem problem, String siteName) {
        problemRepo.findByProblemNumAndSiteName(problem.getProblemNum(), siteName)
                .map(entity -> entity.updateLevel(problem.getProblemLevel()))
                .orElse(problem);

        return problemRepo.save(problem);
    }
}
