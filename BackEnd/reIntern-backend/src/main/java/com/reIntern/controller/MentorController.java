package com.reIntern.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.reIntern.model.Mentor;
import com.reIntern.service.MentorService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MentorController {

    @Autowired
    private MentorService mentorService;

    @PostMapping("/registerMentor")
    public Mentor registerMentor(@RequestBody Mentor mentor) {
        return mentorService.registerMentor(mentor);
    }

    @GetMapping("/getMentor")
    public List<Mentor> getMentor(){
        return mentorService.getMentor();
    }
    
    @GetMapping("/viewByMentoruserid/{mentoruserid}")
    public Mentor getMentorByMentoruserid(@PathVariable int mentoruserid){
        return mentorService.getMentorByMentoruserid(mentoruserid);
    }
    
 
    @DeleteMapping("/deleteMentor")
    public void deleteMentor(@RequestParam Integer mentorid) {
        mentorService.deleteMentor(mentorid);
    }

}