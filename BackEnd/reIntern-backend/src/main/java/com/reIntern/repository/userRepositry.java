package com.reIntern.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reIntern.model.user;

public interface userRepositry extends JpaRepository<user,Integer> {

	Object findByUsername(String username);

}
