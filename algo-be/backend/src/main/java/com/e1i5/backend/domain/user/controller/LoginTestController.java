package com.e1i5.backend.domain.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginTestController {
//    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/login-test")
    public ResponseEntity<String> loginTest() {
        System.out.println("login test입니당");
        return new ResponseEntity<String>("test", HttpStatus.OK);
    }
}
