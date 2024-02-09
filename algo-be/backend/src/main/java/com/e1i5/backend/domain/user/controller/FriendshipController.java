package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.response.FriendListInterfaceResponse;
import com.e1i5.backend.domain.user.dto.response.FriendListResponse;
import com.e1i5.backend.domain.user.service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/friendship")
public class FriendshipController {

    @Autowired
    private FriendService friendService;

    @PostMapping()
    public ResponseEntity<?> makeFriendship(@RequestParam String nickname) {
        //TODO 로그인한 사용자 정보 연결
        int userId = 1;
        try {
            friendService.addFriend(userId, nickname);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return exceptionHandling(e);
        }
    }


    @GetMapping("/friends")
    public ResponseEntity<?> getFriendsList() {
        List<FriendListInterfaceResponse> testFriends = friendService.listFriendship(1);
        return new ResponseEntity<>(testFriends, HttpStatus.OK);
    }

    private ResponseEntity<String> exceptionHandling(Exception e) {
        e.printStackTrace();
        return new ResponseEntity<String>("Error : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}