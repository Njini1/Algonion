package com.e1i5.backend.domain.problem.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/test")
public class TestController {
    @ResponseBody
    @RequestMapping(value="AxiosTest.do", method= RequestMethod.POST)
    public Map<String,Object> AxiosTest (HttpServletRequest request, @RequestBody Map<String, Object> paramMap) throws SQLException {
        System.out.println("paramMap ==>"+ paramMap);
        Map<String,Object> resultMap = new HashMap<String,Object>();
        resultMap.put("java return", "im java");
        return resultMap;
    }
}