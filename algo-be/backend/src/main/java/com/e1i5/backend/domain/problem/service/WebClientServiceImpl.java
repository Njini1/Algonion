package com.e1i5.backend.domain.problem.service;

import com.sun.source.tree.SwitchTree;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

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

        // 결과 확인
        assert response != null;
        log.info(response.toString());
        System.out.println(response.values());
//        List<Map<String, Object> item>
    }
}








//public class WebClientServiceImpl {
//
//    public void get() {
//        // ...
//
//        // api 요청
//        Map<String, Object> response =
//                webClient
//                        .get()
//                        .uri(uriBuilder ->
//                                uriBuilder
//                                        .path("/api/v3/search/problem")
//                                        .queryParam("query", "")
//                                        .queryParam("page", "1")
//                                        .build())
//                        .retrieve()
//                        .bodyToMono(Map.class)
//                        .block();
//
//        // 결과 확인
//        assert response != null;
//
//        // items 추출
//        List<Map<String, Object>> items = (List<Map<String, Object>>) response.get("items");
//
//        // 각 아이템에서 원하는 정보 추출
//        for (Map<String, Object> item : items) {
//            String titleKo = (String) item.get("titleKo");
//            Integer level = (Integer) item.get("level");
//
//            // 추출한 정보 활용
//            log.info("Title: {}, Level: {}", titleKo, level);
//            System.out.println("Title: " + titleKo + ", Level: " + level);
//        }
//    }
//}