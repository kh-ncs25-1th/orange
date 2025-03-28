package com.orange.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.orange.api.domain.dto.UserCreateDTO;
import com.orange.api.domain.dto.UserSaveDTO;
import com.orange.api.service.UserService;
import com.orange.api.service.impl.DefaultUserService;

import lombok.RequiredArgsConstructor;


//@RequestMapping("/api/auth")//Request Method: GET, POST(PUT,DELETE)
//@Controller//page(HTML)
//<==서비스 구현체 컨테이너에 보관되어있으니 자동으로 주입
@RequiredArgsConstructor //final 필드를 매개변수로 정의된 생성자
@RestController 
public class UserController {
	
	private final UserService service;//IOC
	//@Controller : url 요청받고, 웹페이지 제공(View)->return "html파일의 주소"
	//생성자 호출: 객체생성시(UserController 객체는 스프링부트가 처음시작할때 자동으로 만들어줍니다.)
	//생성자DI:IOC 실행하는 방법론 
	
	
	
	//url 요청받고, 웹페이지 제공(View)->React에서 처리(data는 api서버에서 받아서)
	//return 값->
	@PostMapping("/api/auth")
	public ResponseEntity<?> create(@RequestBody UserSaveDTO dto) {//Jackson
		return ResponseEntity.ok(service.save(dto));
	}
	
	//M(비지니스(서비스)로직)V(React)C(요청,응답)
	
}
