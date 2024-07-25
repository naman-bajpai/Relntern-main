package com.reIntern.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.reIntern.model.Role;
import com.reIntern.repository.RoleRepository;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public Role loginValidation(String username, String password) {
        Role user = roleRepository.loginValidation(username, password);
        System.out.println("Current: " + user);
        return roleRepository.findByUsernameAndPassword(username, password);
    }
}
