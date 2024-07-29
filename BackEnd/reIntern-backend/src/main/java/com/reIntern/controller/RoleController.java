package com.reIntern.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import org.json.simple.JSONObject;
import com.reIntern.model.Intern;
import com.reIntern.model.Role;
import com.reIntern.model.Task;
import com.reIntern.model.user;
import com.reIntern.repository.InternRepository;
import com.reIntern.repository.RoleRepository;
import com.reIntern.repository.TaskRepository;
import com.reIntern.repository.UserRepositry;
import com.reIntern.service.RoleService;
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


	@GetMapping("/getusers")
	public List<Task> GetUsers() {
		return taskRepo.findAll();
	}
}
