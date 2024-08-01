package com.reIntern.controller;

import com.reIntern.model.Task;
import com.reIntern.repository.InternRepository;
import com.reIntern.repository.TaskRepository;
import com.reIntern.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.JSONObject;

import com.reIntern.model.Intern;
import com.reIntern.model.Role;
import com.reIntern.service.RoleService;
import com.reIntern.model.user;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(allowedHeaders = "*", origins = "http://localhost:4200")
public class RoleController {

	@Autowired
	private RoleService roleservice;

	@Autowired
	private TaskRepository taskRepo;

	@Autowired
	private InternRepository internrepository;

	@Autowired
	private UserRepositry userrepo;

	@PostMapping("/validates")
	public Role UserLogin(@RequestBody JSONObject user) {
		String username = (String) user.get("username");
		String password = (String) user.get("password");

		Role flag = roleservice.loginValidation(username, password);
		return flag;

	}

	@PostMapping("/signupIntern")
	public JSONObject InternRegisterValue(@RequestBody JSONObject user) {
		JSONObject result = new JSONObject();
		String email = (String) user.get("email");
		String password = (String) user.get("password");
		

		if (userrepo.findByUsername(email) != null) {
			result.put("result", "User already exists");
		} else {
			Intern interndetails = internrepository.findByEmail(email);
			System.out.println(interndetails);
			user newuser = new user();
			//newuser.setId(interndetails.getId());
			newuser.setUsername(email);
			newuser.setPassword(password);
			newuser.setRole("intern");
			result.put("result", "User  saved Successfully");
			newuser = userrepo.save(newuser);
			internrepository.save(interndetails);
			result.put("result", "User  saved Successfully");

		}
		return result;

	}

	@GetMapping("/getusers")
	public List<Task> GetUsers() {
		return taskRepo.findAll();

	}
}
