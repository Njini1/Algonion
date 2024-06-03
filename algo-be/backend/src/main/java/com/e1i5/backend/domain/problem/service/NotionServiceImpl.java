package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.entity.ProblemSite;
import com.e1i5.backend.domain.problem.entity.SolvedProblem;
import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import com.e1i5.backend.domain.problem.dto.response.SolvedProblemDetailResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

@Service
public class NotionServiceImpl implements NotionService {
    private final String NOTION_VERSION = "2022-06-28";
    private final String URL = "https://api.notion.com/v1/pages/";

    @Autowired
    SolvedProblemRepository solvedProblemRepo;

    @Transactional(readOnly = true)
    @Override
    public ResponseEntity<String> saveNotion(String apiKey, String dbId, int solvedProblemId) {

        RestTemplate restTemplate = new RestTemplate(new HttpComponentsClientHttpRequestFactory());
        apiKey = "Bearer " + apiKey;

        SolvedProblem solvedProblem = solvedProblemRepo.findById(solvedProblemId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected solvedProblem"));

        SolvedProblemDetailResponse detail = SolvedProblemDetailResponse.builder()
                .solvedProblem(solvedProblem)
                .build();

        String siteName = "";

        if (detail.getSiteName().equals(ProblemSite.BAEKJOON.getProblemSite())) {
            siteName = "백준";
        } else if (detail.getSiteName().equals(ProblemSite.PROGRAMMERS.getProblemSite())) {
            siteName = "프로그래머스";
        } else if (detail.getSiteName().equals(ProblemSite.SWEA.getProblemSite())) {
            siteName = "SWEA";
        }
        System.out.println(siteName);
//        String json = "{\n" +
//                "    \"parent\": {\n" +
//                "        \"database_id\": \"" + dbId + "\"\n" +
//                "    },\n" +
//                "    \"properties\": {\n" +
//                "        \"사이트\": {\n" +
//                "            \"select\": {\n" +
//                "                \"name\": \"" + siteName + "\"\n" +
//                "            }\n" +
//                "        },\n" +
//                "        \"문제 번호\": {\n" +
//                "                    \"type\": \"rich_text\",\n" +
//                "                    \"rich_text\": [\n" +
//                "                        {\n" +
//                "                            \"text\": {\n" +
//                "                                \"content\": \"" + detail.getProblemNum() + "\"\n" +
//                "                            }\n" +
//                "                        }\n" +
//                "                    ]\n" +
//                "                },\n" +
//                "        \"문제 이름\": {\n" +
//                "            \"title\": [\n" +
//                "                {\n" +
//                "                    \"text\": {\n" +
//                "                        \"content\": \"" + detail.getProblemTitle() + "\"\n" +
//                "                    }\n" +
//                "                }\n" +
//                "            ]\n" +
//                "        },\n" +
//                "        \"분류\": {\n" +
//                "            \"multi_select\": [{\n" +
//                "             \"name\" : \"bfs\"" +
//                "          },{" +
//                "             \"name\" : \"dfs\" " +
//                "          }]\n" +
//                "        }, \n" +
//                "         \"URL\" : {\n" +
//                "             \"url\" : \"" + detail.getUrl() + "\" " +
//                "          }, " +
//                "        \"비고\": {\n" +
//                "            \"type\": \"rich_text\",\n" +
//                "            \"rich_text\": [\n" +
//                "                {\n" +
//                "                    \"text\": {\n" +
//                "                        \"content\": \"\"\n" +
//                "                    }\n" +
//                "                }\n" +
//                "            ]\n" +
//                "        },\n" +
//                "        \"날짜\": {\n" +
//                "            \"rich_text\": [\n" +
//                "                {\n" +
//                "                    \"text\": {\n" +
//                "                        \"content\": \"" + detail.getSubmissionTime() + "\"\n" +
//                "                    }\n" +
//                "                }\n" +
//                "            ]\n" +
//                "        }\n" +
//                "    },\n" +
//                "\"children\": [" +
//                "         {" +
//                "                 \"type\": \"code\"," +
//                "                 \"code\": {" +
//                "                     \"rich_text\": [" +
//                "                          {" +
//                "                                \"type\": \"text\"" +
//                "                                \"text\": {" +
//                "                                    \"content\": \"" + detail.getSubmissionCode() + "\"" +
//                "                                }" +
//                "                           }" +
//                "                    ]," +
//                "                    \"language\": \"" + detail.getLanguage() + "\"" +
//                "                }" +
//                "           }" +
//                "      ]" +
//                "}  ";

        System.out.println(detail.getSubmissionCode());
        System.out.println(detail.getLanguage());

        String java = "java";
        String code = "code";

        String json = "{\n" +
                "    \"parent\": {\n" +
                "        \"database_id\": \"" + dbId + "\"\n" +
                "    },\n" +
                "    \"properties\": {\n" +
                "        \"사이트\": {\n" +
                "            \"select\": {\n" +
                "                \"name\": \"" + siteName + "\"\n" +
                "            }\n" +
                "        },\n" +
                "        \"문제 번호\": {\n" +
                "            \"type\": \"rich_text\",\n" +
                "            \"rich_text\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"" + detail.getProblemNum() + "\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        \"문제 이름\": {\n" +
                "            \"title\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"" + detail.getProblemTitle() + "\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        \"분류\": {\n" +
                "            \"multi_select\": [\n" +
                "                {\n" +
                "                    \"name\": \"bfs\"\n" +
                "                },\n" +
                "                {\n" +
                "                    \"name\": \"dfs\"\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        \"URL\": {\n" +
                "            \"url\": \"" + detail.getUrl() + "\"\n" +
                "        },\n" +
                "        \"비고\": {\n" +
                "            \"type\": \"rich_text\",\n" +
                "            \"rich_text\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        \"날짜\": {\n" +
                "            \"rich_text\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"" + detail.getSubmissionTime() + "\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        }\n" +
                "    },\n" +
                "    \"children\": [\n" +
                "        {\n" +
                "            \"type\": \"code\",\n" +
                "            \"code\": {\n" +
                "                \"rich_text\": [\n" +
                "                    {\n" +
                "                        \"type\": \"text\",\n" +
                "                        \"text\": {\n" +
                "                            \"content\": \"" + detail.getSubmissionCode() + "\"\n" +
                "                        }\n" +
                "                    }\n" +
                "                ],\n" +
                "                \"language\": \"" + java + "\"\n" +
                "            }\n" +
                "        }\n" +
                "    ]\n" +
                "}";



        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Notion-Version", NOTION_VERSION);
        headers.set("Authorization", apiKey);

        HttpEntity<String> requestEntity = new HttpEntity<>(json, headers);

        return restTemplate.exchange(URL, HttpMethod.POST, requestEntity, String.class);
    }
}
