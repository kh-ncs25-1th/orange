package com.orange.api.service.impl;

import org.springframework.stereotype.Service;

import com.orange.api.domain.dto.UserSaveDTO;
import com.orange.api.domain.repository.UserRepository;
import com.orange.api.service.UserService;

@Service
public class DefaultUserService implements UserService {

	//jpa-테이블에 접근하는 객체(DAO-repository)
	//인터페이스로 만들어야합니다.
	UserRepository repository;
	
	
	
	@Override
	public void save(UserSaveDTO dto) {
		//DB USER 테일블에 저장할려고요
		//추가적으로수집할 데이터가 있으면 여기서 작성하면됩니다.(예:IP수집)
	}

}
