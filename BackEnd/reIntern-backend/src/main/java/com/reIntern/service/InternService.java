package com.reIntern.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reIntern.model.InactiveIntern;
import com.reIntern.model.Intern;
import com.reIntern.repository.InactiveInternRepository;
import com.reIntern.repository.InternRepository;
import com.reIntern.service.EmailService;

@Service
public class InternService {
	
    @Autowired
    private InternRepository internRepository;

    @Autowired
    private InactiveInternRepository inactiveInternRepository;
    
    @Autowired
    private EmailService emailService;

    
    public Intern registerIntern(Intern intern) {
    	try {
    	intern.setIsActive(true);
    	emailService.sendEmail(intern.getEmail(),intern.getFullname(),intern.getAssociation(),intern.getProjectname(),intern.getMentor());
        return internRepository.save(intern);
    	}catch(Exception ex) {
    		System.out.println(ex);
    	}
    	return null;
    }

    public List<Intern> getInterns() {
        return (List<Intern>) internRepository.findAll();
    }
    public List<Intern> getActiveInterns() {
        return internRepository.findIsActive();
    }
    public List<Intern> getInActiveInterns() {
        return internRepository.findIsInActive();
    }
    
      public void deleteIntern(Integer id) {
        internRepository.deleteById(id);
    }
 
    public Intern getInternById(int id) {
        try {
            return internRepository.findById(id).get();
        }
        catch(Exception ex) {
            System.out.println(ex);
        }
        return null;
    }
    
    public Intern getInternByUserId(int userId){
    	try {
    		return internRepository.findByUserId(userId).get();
    	}
    	catch(Exception ex) {
            System.out.println(ex);
        }
        return null;
    }
    
//    public List<Intern> getByMentor(String mentoremail) {
//    	try {
//    		return List<Intern> internRepository.findByMentoremail(mentoremail).get();
//    	}
//    	catch(Exception ex) {
//    		System.out.println(ex);
//    	}
//    	return null;
//    }
    
    public List<Intern> getByMentor(String mentoremail) {
        try {
            return internRepository.findByMentoremail(mentoremail);
        } catch(Exception ex) {
            System.out.println(ex);
            return Collections.emptyList(); 
        }
    }
    
    public List<Intern> getActiveByMentor(String mentoremail){
    	try {
    		return internRepository.findActiveByMentoremail(mentoremail);
    	}catch(Exception ex) {
    		System.out.println(ex);
            return Collections.emptyList(); 
    	}
    }
    
//    public Intern getInternByUserId(int user)

//	public Intern updateIntern(Intern updatedIntern) {
//		Integer Id = intern.getid();
//		Intern intern = internRepository.findById(id).orElse(null);
//		if (intern != null) {
//			intern.setFullname(updatedIntern.getFullname());
//			// Update other properties as needed
//			return internRepository.save(intern);
//		}
//		return null;
//	}

    public Intern updateIntern(Intern updatedIntern) {
        Integer id = updatedIntern.getId();
        java.util.Optional<Intern> optionalIntern = internRepository.findById(id);
        if (optionalIntern.isPresent()) {
//            Intern intern = optionalIntern.get();
            
//            intern.setLocation(updatedIntern.getLocation());
//            intern.setDob(updatedIntern.getDob());
//            intern.setSemester(updatedIntern.getSemester());
//            intern.setPhone(updatedIntern.getPhone());
                        
//            intern.setFullname(updatedIntern.getFullname());
//            intern.setEmail(updatedIntern.getEmail());
//            intern.setMentor(updatedIntern.getMentor());
//            intern.setMentoremail(updatedIntern.getMentoremail());
//            intern.setProjectname(updatedIntern.getProjectname());
//            intern.setProjectstatus(updatedIntern.getProjectstatus());
//            intern.setStartDate(updatedIntern.getStartDate());
//            intern.setEndDate(updatedIntern.getEndDate());
//            intern.setRole(updatedIntern.getRole());
//            intern.setAssociation(updatedIntern.getAssociation());
//            intern.setGradyear(updatedIntern.getGradyear());
//            intern.setUniname(updatedIntern.getUniname());
//            intern.setCoursename(updatedIntern.getCoursename());
//            intern.setSpecialization(updatedIntern.getSpecialization());
//            intern.setLinkedlink(updatedIntern.getLinkedlink());
//            intern.setQuarter(updatedIntern.getQuarter());
//            intern.setReference(updatedIntern.getReference());
//            
//            intern.setRemarks(updatedIntern.getRemarks());
//            intern.setDomainid(updatedIntern.getDomainid());

            return internRepository.save(updatedIntern);
        }
        return null;
    }
    
	public void moveActiveToIntactive(int internId) {                                                                                                                                                                                                                                                                                           
		java.util.Optional<Intern> optionalActiveIntern = internRepository.findById(internId);
//		Optional<Intern> intern =  internRepository.findById(internId);
		if(optionalActiveIntern.isPresent()) {
			Intern intern = optionalActiveIntern.get();
			intern.setIsActive(false);
			internRepository.save(intern);
		}
    }
	
	public void closeInternship(int internId) {
		java.util.Optional<Intern> optionalActiveIntern = internRepository.findById(internId);
//		Optional<Intern> intern =  internRepository.findById(internId);
		if(optionalActiveIntern.isPresent()) {
			Intern intern = optionalActiveIntern.get();
			System.out.println(intern);
			intern.setIsActive(false);
			emailService.sendEmailtoHR(intern.getFullname(),intern.getEmail(),intern.getStartDate(),intern.getEndDate(),intern.getDomainid(),intern.getProjectname(),intern.getMentor());
			emailService.sendEmailtoDeactivate(intern.getFullname(),intern.getStartDate(),intern.getEndDate(),intern.getDomainid());
			internRepository.save(intern);
		}
	}

//    public void moveActiveToIntactive(int internId) {
//        // Step 1: Retrieve active intern using the InternRepository
//        java.util.Optional<Intern> optionalActiveIntern = internRepository.findById(internId);
//
//        if (optionalActiveIntern.isPresent()) {
//            // Step 2: Create a new instance of InactiveIntern
//            Intern activeIntern = optionalActiveIntern.get();
//            InactiveIntern inactiveIntern = new InactiveIntern();
//            // Step 3: Copy relevant data from active intern to inactive intern
//            
//            inactiveIntern.setLocation(activeIntern.getLocation());
//            inactiveIntern.setPhone(activeIntern.getPhone());
//            inactiveIntern.setDob(activeIntern.getDob());
//            inactiveIntern.setSemester(activeIntern.getSemester());
//            
//            inactiveIntern.setRemarks(activeIntern.getRemarks());
//            inactiveIntern.setDomainid(activeIntern.getDomainid());
//            
//            inactiveIntern.setFullname(activeIntern.getFullname());
//            inactiveIntern.setEmail(activeIntern.getEmail());
//            inactiveIntern.setMentor(activeIntern.getMentor());
//            inactiveIntern.setMentoremail(activeIntern.getMentoremail());
//            inactiveIntern.setMentoremail(activeIntern.getMentoremail());
//            inactiveIntern.setProjectname(activeIntern.getProjectname());
//            inactiveIntern.setProjectstatus(activeIntern.getProjectstatus());
//            inactiveIntern.setStartDate(activeIntern.getStartDate());
//            inactiveIntern.setEndDate(activeIntern.getEndDate());
//            inactiveIntern.setRole(activeIntern.getRole());
//            inactiveIntern.setAssociation(activeIntern.getAssociation());
//            inactiveIntern.setGradyear(activeIntern.getGradyear());
//            inactiveIntern.setUniname(activeIntern.getUniname());
//            inactiveIntern.setCoursename(activeIntern.getCoursename());
//            inactiveIntern.setSpecialization(activeIntern.getSpecialization());
//            inactiveIntern.setLinkedlink(activeIntern.getLinkedlink());
//            inactiveIntern.setQuarter(activeIntern.getQuarter());
//            inactiveIntern.setReference(activeIntern.getReference());
//            // Copy other relevant properties
//
//            // Step 4: Save the new InactiveIntern instance
//            inactiveInternRepository.save(inactiveIntern);
//
//            // Step 5: Delete the active intern from the InternRepository
//            internRepository.deleteById(internId);
//        } else {
//            // Handle the case where the active intern with the provided ID is not found.
//            // You can throw an exception or log an error message, depending on your use
//            // case.
//        }
//    }


}
