package com.orange.api.service.impl;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.orange.api.domain.dto.EmailCheckRequest;
import com.orange.api.domain.dto.NickCheckRequest;
import com.orange.api.domain.dto.ResponUser;
import com.orange.api.domain.dto.UserSaveDTO;
import com.orange.api.domain.entity.UserEntity;
import com.orange.api.domain.repository.UserRepository;
import com.orange.api.service.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class DefaultUserService implements UserService {

	//jpa-테이블에 접근하는 객체(DAO-repository)
	//인터페이스로 만들어야합니다.
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;//스프링이 처음에 시작할때 Bean을 주입(DI)
	
	@Override
	public ResponUser save(UserSaveDTO dto) {
		//DB USER 테일블에 저장할려고요
		//추가적으로수집할 데이터가 있으면 여기서 작성하면됩니다.(예:IP수집)
		//UserEntity entity=new UserEntity(0, dto.getEmail(), dto.getPass(), dto.getNick(), null, null);
		//UserEntity entity=UserEntity.builder().email(dto.getEmail()).pass(dto.getPass()).nick(dto.getNick()).build();
		UserEntity entity=repository.save(dto.toEntity(passwordEncoder));
		//entity 를 그대로 보내지 마시고 안전하게 DTO로 바꿔가세요
		ResponUser responUser=entity.toResponseUser();
		return responUser;
	}

	@Override
	public boolean checkEmailExist(EmailCheckRequest requestDto) {
		//repository.findById(null)//pk를 이용해서 조회하는 쿼리메서드
		//쿼리메서드 : 특정컬럼을 조회시 findBy컬럼명  컬럼명(Entity.class)은 첫글자를 대문자로
		return repository.existsByEmail(requestDto.email());
	}

	@Override
	public boolean checkNickExist(NickCheckRequest requestDto) {
		
		return repository.existsByNick(requestDto.nick());
	}

}
