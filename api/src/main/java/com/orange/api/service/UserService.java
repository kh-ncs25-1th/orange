package com.orange.api.service;

import com.orange.api.domain.dto.EmailCheckRequest;
import com.orange.api.domain.dto.NickCheckRequest;
import com.orange.api.domain.dto.ResponUser;
import com.orange.api.domain.dto.UserSaveDTO;
import com.orange.api.domain.entity.UserEntity;

public interface UserService {

	ResponUser save(UserSaveDTO dto);

	boolean checkEmailExist(EmailCheckRequest requestDto);

	boolean checkNickExist(NickCheckRequest requestDto);

}
