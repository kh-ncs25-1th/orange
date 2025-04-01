package com.orange.api.domain.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.orange.api.domain.dto.ResponUser;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
@SequenceGenerator(name = "gen_seq_user",
		sequenceName = "seq_user", initialValue = 101, allocationSize = 1)
@Table(name = "orange_user")//DTO객체로 사용하지 마세요
@Entity
public class UserEntity {//jpa 물리DB 테이블을 대신하는 java객체
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gen_seq_user")
	private long no;
	
	@Column(unique=true,nullable = false)
	private String email;
	@Column(nullable = false)
	private String pass;
	@Column(unique=true)
	private String nick;
	@CreationTimestamp
	private LocalDateTime createdAt;
	@UpdateTimestamp
	private LocalDateTime updatedAt;
	
	//Entity->DTO로 map해주는 편의 메서드를 만들어볼께요
	public ResponUser toResponseUser(){
		return ResponUser.builder()
				.no(no).email(email).nick(nick).updatedAt(updatedAt)
				.build();
	}
	
	
}
