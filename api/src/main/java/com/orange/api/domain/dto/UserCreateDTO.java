package com.orange.api.domain.dto;

//불변객체:수정불가
public record UserCreateDTO(
		String email,
		String pass,
		String nick) {
}
