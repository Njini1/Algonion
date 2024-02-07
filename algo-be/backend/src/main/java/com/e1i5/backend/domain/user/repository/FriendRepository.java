package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.entity.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendRepository extends JpaRepository<Friend, Integer> {

}
