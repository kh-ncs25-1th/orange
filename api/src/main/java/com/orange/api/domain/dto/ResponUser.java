package com.orange.api.domain.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

//페이지에 응답해줄 데이터만 따로 관리하세요
@Getter
@Builder
public class ResponUser {
	private long no;
	private String email;
	private String nick;
	private LocalDateTime updatedAt;
	
	//필드 초기화메서드
	//필드 초기화생성자
}
