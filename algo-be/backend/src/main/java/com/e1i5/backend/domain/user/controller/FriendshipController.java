package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.response.FriendListInterfaceResponse;
import com.e1i5.backend.domain.user.dto.response.FriendListResponse;
import com.e1i5.backend.domain.user.service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/v1/friendship")
public class FriendshipController {

    @Autowired
    private FriendService friendService;

    /**
     * 친구 추가
     * @param nickname
     * @return 없음
     */
    @PostMapping()
    public ResponseEntity<?> makeFriendship(@RequestParam String nickname, Principal principal) {
        int userId = Integer.parseInt(principal.getName());
        try {
            friendService.addFriend(userId, nickname);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return exceptionHandling(e);
        }
    }

    /**
     * 친구 목록 불러오기
     * @return 닉네임, 티어, 점수
     */
    @GetMapping("/friends")
    public ResponseEntity<List<FriendListInterfaceResponse>> getFriendsList(Principal principal) {
        // 친구 목록 불러오기는 로그인한 사용자만 볼 수 있는 건지
        int userId = Integer.parseInt(principal.getName());
        List<FriendListInterfaceResponse> testFriends = friendService.listFriendship(userId);

        return new ResponseEntity<>(testFriends, HttpStatus.OK);
    }

    /**
     * 친구 검색
     * @param nickname
     * @return 닉네임, 티어, 점수
     */
    @GetMapping("/search")
    public ResponseEntity<List<FriendListInterfaceResponse>> searchUser(@RequestParam("nickname") String nickname) {
        List<FriendListInterfaceResponse> friends = friendService.searchNickname(nickname);
        return new ResponseEntity<>(friends, HttpStatus.OK);
    }

    /**
     * 친구 삭제
     * @param nickname 친구 취소할 닉네임
     * @param principal 로그인한 유저
     * @return 없음
     */
    @DeleteMapping()
    public ResponseEntity<Void> cancleFriendship(@RequestParam("nickname") String nickname, Principal principal) {
        int userId = Integer.parseInt(principal.getName());
        friendService.cancelFriendship(userId, nickname);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private ResponseEntity<String> exceptionHandling(Exception e) {
        e.printStackTrace();
        return new ResponseEntity<String>("Error : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
