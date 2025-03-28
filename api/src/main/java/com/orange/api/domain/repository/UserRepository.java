package com.orange.api.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.orange.api.domain.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
	//사용자가 직접 처리하는 쿼리를 작성(JPA문법) 추상메서드형태로
}
