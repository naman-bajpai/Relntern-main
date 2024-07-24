package com.reIntern.service;

import java.util.Collections;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.reIntern.model.Intern;

import com.reIntern.repository.InternRepository;


@Service
public class InternService {

	@Autowired
	private InternRepository internRepository;


	@Autowired
	private EmailService emailService;


	public Intern registerIntern(Intern intern) {
		try {
			intern.setIsActive(true);
//			emailService.sendEmail(intern.getEmail(), intern.getFullname(), intern.getAssociation(),
//					intern.getProjectname(), intern.getMentor());
			return internRepository.save(intern);
		} catch (Exception ex) {
			ex.printStackTrace();
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
		try {
			internRepository.deleteById(id);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public Intern getInternById(int id) {
		try {
			return internRepository.findById(id).orElse(null);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	public Intern getInternByUserId(int userId) {
		try {
			return internRepository.findByUserId(userId).orElse(null);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	public List<Intern> getByMentor(String mentoremail) {
		try {
			return internRepository.findByMentoremail(mentoremail);
		} catch (Exception ex) {
			ex.printStackTrace();
			return Collections.emptyList();
		}
	}

	public List<Intern> getActiveByMentor(String mentoremail) {
		try {
			return internRepository.findActiveByMentoremail(mentoremail);
		} catch (Exception ex) {
			ex.printStackTrace();
			return Collections.emptyList();
		}
	}

	@Transactional
	public Intern updateIntern(Intern updatedIntern) {
		try {
			Optional<Intern> optionalIntern = internRepository.findById(updatedIntern.getId());
			if (optionalIntern.isPresent()) {
				return internRepository.save(updatedIntern);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	@Transactional
	public void moveActiveToIntactive(int internId) {
		try {
			Optional<Intern> optionalActiveIntern = internRepository.findById(internId);
			if (optionalActiveIntern.isPresent()) {
				Intern intern = optionalActiveIntern.get();
				intern.setIsActive(false);
				internRepository.save(intern);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	@Transactional
	public void closeInternship(int internId) {
		try {
			Optional<Intern> optionalActiveIntern = internRepository.findById(internId);
			if (optionalActiveIntern.isPresent()) {
				Intern intern = optionalActiveIntern.get();
				intern.setIsActive(false);
//				emailService.sendEmailtoHR(intern.getFullname(), intern.getEmail(), intern.getStartDate(),
//						intern.getEndDate(), intern.getDomainid(), intern.getProjectname(), intern.getMentor());
//				emailService.sendEmailtoDeactivate(intern.getFullname(), intern.getStartDate(), intern.getEndDate(),
//						intern.getDomainid());
				internRepository.save(intern);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

}
