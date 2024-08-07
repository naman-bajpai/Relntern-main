package com.reIntern.service;

import java.sql.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import com.reIntern.utils.DeactivateEmailUtils;
import com.reIntern.utils.EmailUtils;
import com.reIntern.utils.HRemailUtils;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender mailSender;

	@Value("${spring.mail.username}")
	private String fromMail;

	@Async
	public void sendEmail(String mail, String fullname, String association, String projectname, String mentor) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setFrom(fromMail);
		simpleMailMessage.setSubject("Internship Confirmation mail");
		simpleMailMessage.setText(EmailUtils.getEmailMessage(fullname, association, projectname, mentor));
		simpleMailMessage.setTo(mail);
		mailSender.send(simpleMailMessage);
	}
	
	@Async
	public void sendEmailtoHR(String fullname, String mail, Date startdate, Date enddate, String domainid, String projectname, String mentor) {
		String to = "namanbajpai3003@gmail.com";  // Change to actual HR email
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setFrom(fromMail);
		simpleMailMessage.setSubject("Request for Internship Certificate - " + fullname);
		simpleMailMessage.setText(HRemailUtils.getHRemailMessage(fullname, mail, startdate, enddate, domainid, projectname, mentor));
		simpleMailMessage.setTo(to);
		mailSender.send(simpleMailMessage);
	}
	
	@Async
	public void sendEmailtoDeactivate(String fullname, Date startdate, Date enddate, String domainid) {
		String to = "shiva9824@outlook.com";  // Change to actual admin email
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setFrom(fromMail);
		simpleMailMessage.setSubject("Deactivate email account for - " + fullname);
		simpleMailMessage.setText(DeactivateEmailUtils.getDeactivateEmailMessage(fullname, startdate, enddate, domainid));
		simpleMailMessage.setTo(to);
		mailSender.send(simpleMailMessage);
	}
}