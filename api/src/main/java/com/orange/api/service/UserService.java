package com.orange.api.service;

import com.orange.api.domain.dto.UserSaveDTO;
import com.orange.api.domain.entity.UserEntity;

public interface UserService {

	UserEntity save(UserSaveDTO dto);

}
