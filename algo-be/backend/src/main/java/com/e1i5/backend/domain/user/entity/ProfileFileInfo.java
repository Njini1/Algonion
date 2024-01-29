package com.e1i5.backend.domain.user.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "user_file_info")
public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id", updatable = false)
    private int userFileInfoId;
    private String saveFolder;
    private String originalFile;
    private String saveFile;

    @Builder
    public UserProfile(String saveFolder, String originalFile, String saveFile) {
        this.saveFolder = saveFolder;
        this.originalFile = originalFile;
        this.saveFile = saveFile;
    }
}