package com.e1i5.backend.domain.problem.service;

import com.e1i5.backend.domain.problem.repository.SolvedProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class NotionServiceImpl implements NotionService{
    private final String NOTION_VERSION = "2022-06-28";
    private final String URL = "https://api.notion.com/v1/pages/";

    @Autowired
    SolvedProblemRepository solvedProblemRepo;

    @Override
    public ResponseEntity<String> saveNotion(String apiKey, String dbId) {

        RestTemplate restTemplate = new RestTemplate(new HttpComponentsClientHttpRequestFactory());
        apiKey = "Bearer " + apiKey;
        String content = "this is 123123123123123123";

        

//        String json = "{\n" +
//                "    \"parent\": {\n" +
//                "        \"database_id\": \"" + dbId + "\"\n" +
//                "    },\n" +
//                "    \"properties\": {\n" +
//                "        \"이름\": {\n" +
//                "            \"title\": [\n" +
//                "                {\n" +
//                "                    \"text\": {\n" +
//                "                        \"content\": \"" + content + "\"\n" +
//                "                    }\n" +
//                "                }\n" +
//                "            ]\n" +
//                "        }\n" +
//                "    }\n" +
//                "}";
        String json = "{\n" +
                "    \"parent\": {\n" +
                "        \"database_id\": \"9c5d2739bfe44b1697e3463ba85dcebf\"\n" +
                "    },\n" +
                "    \"properties\": {\n" +
                "        \"사이트\": {\n" +
                "            \"select\": {\n" +
                "                \"name\": \"Programmers\"\n" +
                "            }\n" +
                "        },\n" +
                "        \"문제 번호\": {\n" +
                "                    \"type\": \"rich_text\",\n" +
                "                    \"rich_text\": [\n" +
                "                        {\n" +
                "                            \"text\": {\n" +
                "                                \"content\": \"1830\"\n" +
                "                            }\n" +
                "                        }\n" +
                "                    ]\n" +
                "                },\n" +
                "        \"문제 이름\": {\n" +
                "            \"title\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"달로 떠나자\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        \"링크\": {\n" +
                "            \"type\": \"rich_text\",\n" +
                "            \"rich_text\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"link\": \"https://en.wikipedia.org/wiki/Kale\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        \"비고\": {\n" +
                "            \"type\": \"rich_text\",\n" +
                "            \"rich_text\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"테스트\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        },\n" +
                "        \"날짜\": {\n" +
                "            \"type\": \"rich_text\",\n" +
                "            \"rich_text\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"테스트\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        }\n" +
                "    }\n" +
                "}  ";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Notion-Version", NOTION_VERSION);
        headers.set("Authorization", apiKey);

        HttpEntity<String> requestEntity = new HttpEntity<>(json, headers);

        return restTemplate.exchange(URL, HttpMethod.POST, requestEntity, String.class);
    }
}
