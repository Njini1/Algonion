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

        

        String json = "{\n" +
                "    \"parent\": {\n" +
                "        \"database_id\": \"" + dbId + "\"\n" +
                "    },\n" +
                "    \"properties\": {\n" +
                "        \"이름\": {\n" +
                "            \"title\": [\n" +
                "                {\n" +
                "                    \"text\": {\n" +
                "                        \"content\": \"" + content + "\"\n" +
                "                    }\n" +
                "                }\n" +
                "            ]\n" +
                "        }\n" +
                "    }\n" +
                "}";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Notion-Version", NOTION_VERSION);
        headers.set("Authorization", apiKey);

        HttpEntity<String> requestEntity = new HttpEntity<>(json, headers);

        return restTemplate.exchange(URL, HttpMethod.POST, requestEntity, String.class);
    }
}
