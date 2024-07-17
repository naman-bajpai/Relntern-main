package com.reIntern.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.reIntern.model.upload;

@Repository
public interface UploadRepository extends JpaRepository<upload,Integer> {

	@Query(value="Select * from login.upload where internid=:id",nativeQuery=true)
	List<upload> findByInternid(int id);

}
