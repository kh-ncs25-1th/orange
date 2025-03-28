package com.orange.api.domain.dto;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.orange.api.domain.entity.UserEntity;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter//부트 3.0이상가능 하위버전 setter가 필수요소임
//비동기요청은 jackson바인이 지원하므로 버전과 상관없음
public class UserSaveDTO {
	private String email;
	private String pass;
	private String nick;
	
	//DB에 저장하기위한 DTO->JPA(UserEntity)
	public UserEntity toEntity(PasswordEncoder pe) {
		return UserEntity.builder()
				.email(email)
				.pass(pe.encode(pass))
				.nick(nick)
				.build();
	}
	
}
