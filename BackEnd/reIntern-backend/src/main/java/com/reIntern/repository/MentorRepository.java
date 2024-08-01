package com.reIntern.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

import com.reIntern.model.Mentor;

@Repository
public interface MentorRepository extends JpaRepository<Mentor,Integer> {


	Optional<Mentor> findByMentoremail(int mentoruserid);

	Mentor findByMentoruserid(int userid);

	
//	user_id
}
