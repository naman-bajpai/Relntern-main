                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         package com.reIntern.model;

import jakarta.persistence.Id;

import jakarta.persistence.Entity;

@Entity
public class Role {

    @Id
    private int id;
    private String username;
    private String password;
    private String role;


    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
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

    public Role(int id, String username, String password, String role) {
        super();
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    public Role() {
        super();
        // TODO Auto-generated constructor stub
    }
    @Override
    public String toString() {
        return "Role [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role + "]";
    }


}
