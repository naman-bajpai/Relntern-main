package com.reIntern.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.reIntern.model.Intern;
import com.reIntern.service.InternService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class InternController {

    @Autowired
    private InternService internService;
    
    @PostMapping("/registerIntern")
    public Intern registerIntern(@RequestBody Intern intern) {
    	System.out.println(intern.getQuarter());
        return internService.registerIntern(intern);
    }

    @GetMapping("/getInterns")
    public List<Intern> getInterns() {
        return internService.getInterns();
    }
    @GetMapping("/getActiveInterns")
    public List<Intern> getActiveInterns() {
        return internService.getActiveInterns();
    }
    @GetMapping("/getInActiveInterns")
    public List<Intern> getInActiveInterns() {
        return internService.getInActiveInterns();
    }

    @DeleteMapping("/deleteIntern")
    public void deleteIntern(@RequestParam Integer id) {
        internService.deleteIntern(id);
    }

    @PutMapping("/updateIntern")
    public Intern updateIntern(@RequestBody Intern intern) {
        return internService.updateIntern(intern);
    }


    @PostMapping("/{id}/moveToInactive")
    public ResponseEntity<String> moveActiveToIntactive(@PathVariable int id) {
//        try {
            internService.moveActiveToIntactive(id);
            return ResponseEntity.ok("Intern moved to inactive successfully.");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("Error moving intern to inactive interns: " + e.getMessage());
//        }
    }
    
    @PostMapping("/{id}/closeInternship")
    public ResponseEntity<String> closeInternship(@PathVariable int id) {
//        try {
            internService.closeInternship(id);
            return ResponseEntity.ok("Intern moved to inactive, mails triggerd.");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("Error moving intern to inactive interns: " + e.getMessage());
//        }
    }

    @GetMapping("/viewtask/{id}")
    public Intern getinternByid(@PathVariable int id){
        System.out.println(id);
        return internService.getInternById(id) ;
    }
    
    @GetMapping("/viewByUserId/{userId}")
    public Intern getInternByUserId(@PathVariable int userId){
        System.out.println(userId);
        return internService.getInternByUserId(userId) ;
    }
    
//    All interns under this mentor active and inactive
    @GetMapping("/getByMentor/{mentoremail}")
    public List<Intern> getByMentor(@PathVariable String mentoremail) {
    	System.out.println(mentoremail);
    	return  internService.getByMentor(mentoremail);
    }
    
//    Interns those are active under this mentor
    @GetMapping("/getActiveByMentor/{mentoremail}")
    public List<Intern> getActiveByMentor(@PathVariable String mentoremail) {
    	System.out.println(mentoremail);
    	return  internService.getActiveByMentor(mentoremail);
    }
    

}	





