package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DashboardRepository extends JpaRepository<ProfileFileInfo, Integer> {
}
