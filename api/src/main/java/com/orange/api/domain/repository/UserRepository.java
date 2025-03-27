package com.orange.api.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.orange.api.domain.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
