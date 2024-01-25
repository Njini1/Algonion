package com.e1i5.backend.domain.problem.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class WebClientServiceImpl {

    public void get() {
        String code = "myCode";

        // webClient 기본 설정
        WebClient webClient =
                WebClient
                        .builder()
                        .baseUrl("https://solved.ac")
                        .build();

        // api 요청
        Map response =
                webClient
                        .get()
                        .uri(uriBuilder ->
                                uriBuilder
                                        .path("/api/v3/search/problem")
                                        .queryParam("query", "")
                                        .queryParam("page", "1")
                                        .build())
                        .retrieve()
                        .bodyToMono(Map.class)
                        .block();

        assert response != null;
//        log.info(response.toString());
        List<Map<String, Object>> items = (List<Map<String, Object>>) response.get("items");

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

            System.out.println("ProblemId : " + problemId);
            System.out.println("Title : " + titleKo);
            System.out.println("Level : " + level);
            System.out.println("AlgoGroup : " + algoGroup);
            System.out.println("url : https://www.acmicpc.net/problem/" + Integer.toString(problemId));
            System.out.println("====================================================");
        }
    }
}