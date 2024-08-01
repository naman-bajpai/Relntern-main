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
			// emailService.sendEmail(intern.getEmail(),intern.getFullname(),intern.getAssociation(),intern.getProjectname(),intern.getMentor());

			return internRepository.save(intern);
		} catch (Exception ex) {
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

	public void deleteIntern(int id) {
		internRepository.deleteById(id);
	}

	public Intern getInternById(int id) {
		try {
			return internRepository.findById(id).get();
		} catch (Exception ex) {
			System.out.println(ex);
		}
		return null;
	}

	public Intern getInternByUserId(int userId) {
		try {
			return internRepository.findByUserId(userId).get();
		} catch (Exception ex) {
			System.out.println(ex);
		}
		return null;
	}

	public List<Intern> getByMentor(String mentoremail) {
		try {
			return internRepository.findByMentoremail(mentoremail);
		} catch (Exception ex) {
			System.out.println(ex);
			return Collections.emptyList();
		}
	}

	public List<Intern> getActiveByMentor(String mentoremail) {
		try {
			return internRepository.findActiveByMentoremail(mentoremail);
		} catch (Exception ex) {
			System.out.println(ex);
			return Collections.emptyList();
		}
	}

	public Intern updateIntern(Intern updatedIntern) {
		Integer id = updatedIntern.getId();
		java.util.Optional<Intern> optionalIntern = internRepository.findById(id);
		if (optionalIntern.isPresent()) {
			return internRepository.save(updatedIntern);
		}
		return null;
	}

	public void moveActiveToIntactive(int internId) {
		java.util.Optional<Intern> optionalActiveIntern = internRepository.findById(internId);
//		Optional<Intern> intern =  internRepository.findById(internId);
		if (optionalActiveIntern.isPresent()) {
			Intern intern = optionalActiveIntern.get();
			intern.setIsActive(false);
			internRepository.save(intern);
		}
	}

	public void closeInternship(int internId) {
		java.util.Optional<Intern> optionalActiveIntern = internRepository.findById(internId);
//		Optional<Intern> intern =  internRepository.findById(internId);
		if (optionalActiveIntern.isPresent()) {
			Intern intern = optionalActiveIntern.get();
			System.out.println(intern);
			intern.setIsActive(false);
//			emailService.sendEmailtoHR(intern.getFullname(),intern.getEmail(),intern.getStartDate(),intern.getEndDate(),intern.getDomainid(),intern.getProjectname(),intern.getMentor());
//		emailService.sendEmailtoDeactivate(intern.getFullname(),intern.getStartDate(),intern.getEndDate(),intern.getDomainid());
			internRepository.save(intern);
		}
	}

}
