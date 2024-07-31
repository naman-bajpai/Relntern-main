package com.reIntern.model;

import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String role;

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    // Constructor without 'id' parameter
    public Role(String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public Role() {
        super();
    }

    @Override
    public String toString() {
        return "Role [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role + "]";
    }
}