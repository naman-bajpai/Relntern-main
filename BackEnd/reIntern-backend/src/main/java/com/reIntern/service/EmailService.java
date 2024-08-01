package com.reIntern.service;

import java.io.File;
import java.sql.Date;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
//import org.springframework.ws.mime.MimeMessage;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
//import org.springframework.*;

import com.reIntern.model.MailStructure;
import com.reIntern.utils.DeactivateEmailUtils;
import com.reIntern.utils.EmailUtils;
import com.reIntern.utils.HRemailUtils;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender mailSender;

	@Value("${spring.mail.username}")
	private String fromMail;
	
//		public void sendEmail(String mail,MailStructure mailStructure) {
	@Async
	public void sendEmail(String mail,String fullname,String association,String projectname,String mentor) {
			SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
			
			simpleMailMessage.setFrom(fromMail);
//			simpleMailMessage.setSubject(mailStructure.getSubject());
			simpleMailMessage.setSubject("Internship Confirmation mail");
//			simpleMailMessage.setText(mailStructure.getMessage());
			simpleMailMessage.setText(EmailUtils.getEmailMessage(fullname, association, projectname, mentor));
			simpleMailMessage.setTo(mail);
			
			mailSender.send(simpleMailMessage);
		}
	
	@Async
	public void sendEmailtoHR(String fullname,String mail,Date startdate,Date enddate,String domainid,String projectname,String mentor) {
			String to = "namanbajpai4@gmail.com";    
//			Note for further:- Type HR's Email above
			SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
			
			simpleMailMessage.setFrom(fromMail);
//			simpleMailMessage.setSubject(mailStructure.getSubject());
			simpleMailMessage.setSubject("Request for Internship Certificate - " +fullname);
//			simpleMailMessage.setText(mailStructure.getMessage());
			simpleMailMessage.setText(HRemailUtils.getHRemailMessage(fullname, mail,startdate,enddate,domainid, projectname, mentor));
			simpleMailMessage.setTo(to);
			
			mailSender.send(simpleMailMessage);
		}
	
	@Async
	public void sendEmailtoDeactivate(String fullname,Date startdate,Date enddate,String domainid) {
			String to = "namanbajpai4@gmail.com";    
			SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
			
			simpleMailMessage.setFrom(fromMail);
			simpleMailMessage.setSubject("Deactivate zmail account for - " +fullname);
			simpleMailMessage.setText(DeactivateEmailUtils.getDeactivateEmailMessage(fullname,startdate,enddate,domainid));
			simpleMailMessage.setTo(to);
			
			mailSender.send(simpleMailMessage);
		}
	

}
