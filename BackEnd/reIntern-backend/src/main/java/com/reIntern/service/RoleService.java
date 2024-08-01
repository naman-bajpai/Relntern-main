package com.reIntern.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reIntern.dbutil.DButil;
import com.reIntern.model.Role;
import com.reIntern.repository.RoleRepository;

@Service
public class RoleService{

    @Autowired
    private RoleRepository userRepo;
    public Role loginValidation(String username, String password) {

        Role user= userRepo.loginValidation(username, password);
        System.out.println("Current: " + user);
        return user;

    }


}

