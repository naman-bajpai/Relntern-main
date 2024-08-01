package com.reIntern.repository;

import java.util.List;
import java.util.Optional;
import java.lang.Integer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.reIntern.model.Intern;

@Repository
public interface InternRepository extends JpaRepository<Intern, Integer> {

	Intern findByEmail(String email);

	Optional<Intern> findByUserId(int userId);

//		Optional<List<Intern>> findByMentoremail(String mentoremail);
	List<Intern> findByMentoremail(String mentoremail);

	@Query(value = "SELECT * FROM relnterndata WHERE is_active = true", nativeQuery = true)
	List<Intern> findIsActive();

	@Query(value = "SELECT * FROM relnterndata WHERE is_active = false", nativeQuery = true)
	List<Intern> findIsInActive();

//	@Query(value = "SELECT * FROM relnterndata WHERE is_active = true &&  mentoremail=mentoremail", nativeQuery = true)
//	List<Intern> findActiveByMentoremail(String mentoremail); 
	@Query(value = "SELECT * FROM relnterndata WHERE is_active = true AND mentoremail = :mentoremail", nativeQuery = true)
	List<Intern> findActiveByMentoremail(String mentoremail);

}
