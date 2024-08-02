package com.reIntern.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reIntern.model.Intern;
import com.reIntern.model.Mentor;
import com.reIntern.repository.MentorRepository;

@Service
public class MentorService {
    @Autowired
    private MentorRepository mentorRepository;

    public Mentor registerMentor(Mentor mentor) {
        return mentorRepository.save(mentor);
    }
    
    public Mentor getMentorByMentoruserid(int mentoruserid){
    	try {
    		return mentorRepository.findByMentoruserid( mentoruserid);
    	}
    	catch(Exception ex) {
            System.out.println(ex);
        }
        return null;
    }
    
    public List<Mentor> getMentor(){
        return (List<Mentor>)mentorRepository.findAll();
    }

    public void deleteMentor(Integer mentorid) {
        mentorRepository.deleteById(mentorid);
    }

//	public Mentor mentorEmail() {
//		// TODO Auto-generated method stub
//		return null;
//	}

}
