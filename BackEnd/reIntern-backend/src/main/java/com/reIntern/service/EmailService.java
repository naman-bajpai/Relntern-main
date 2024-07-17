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

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;

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
			String to = "fuzase100@gmail.com";    
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
			String to = "fuzase100@gmail.com";    
//			Note for further:- Type Email above of concerned person for de-activating Zmail of intern
			SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
			
			simpleMailMessage.setFrom(fromMail);
//			simpleMailMessage.setSubject(mailStructure.getSubject());
			simpleMailMessage.setSubject("Deactivate zmail account for - " +fullname);
//			simpleMailMessage.setText(mailStructure.getMessage());
			simpleMailMessage.setText(DeactivateEmailUtils.getDeactivateEmailMessage(fullname,startdate,enddate,domainid));
			simpleMailMessage.setTo(to);
			
			mailSender.send(simpleMailMessage);
		}
	
	
//	public void sendMimeMessageWithAttachments() {
////		MimeMessage message= new MimeMessage(session);
////		MimeMessage
////		MimeMessageHelper helper=new MimeMessageHelper(message,multipart:true,encoding:"UTF-8");
//		
//			String path = "C:\\Users\\Sarang\\Desktop\\11.jpeg";
//			MimeMultipart mimeMultipart = new MimeMultipart();
//			
//			MimeBodyPart textMime = new MimeBodyPart();
//			
//			MimeBodyPart fileMime = new MimeBodyPart();
//			
//			}
		
//	private static void sendAttach(String mail,String fullname,String association,String projectname,String mentor) {
//
//		//Variable for gmail
//		String host="smtp.gmail.com";
//		
//		//get the system properties
//		Properties properties = System.getProperties();
//		System.out.println("PROPERTIES "+properties);
//		
//		//setting important information to properties object
//		
//		//host set
//		properties.put("mail.smtp.host", host);
//		properties.put("mail.smtp.port","465");
//		properties.put("mail.smtp.ssl.enable","true");
//		properties.put("mail.smtp.auth","true");
//		
//		//Step 1: to get the session object..
//		Session session=Session.getInstance(properties, new Authenticator() {
//			@Override
//			protected PasswordAuthentication getPasswordAuthentication() {				
//				return new PasswordAuthentication("sarangtripathi18@gmail.com", "roafufgfdpnhlmql");
//			}
//			
//			
//			
//		});
//		
//		session.setDebug(true);
//		
//		//Step 2 : compose the message [text,multi media]
//		MimeMessage m = new MimeMessage(session);
//		
//		try {
//		
//		//from email
//		m.setFrom(fromMail);
//		
//		//adding recipient to message
//		m.addRecipient(Message.RecipientType.TO, new InternetAddress(mail));
//		
//		//adding subject to message
//		m.setSubject("Internship Confirmation mail");
//	
//		
//		//attachement..
//		
//		//file path
//		String path="C:\\\\Users\\\\Sarang\\\\Desktop\\\\11.jpeg";
//		
//		
//		MimeMultipart mimeMultipart = new MimeMultipart();
//		//text
//		//file
//		
//		MimeBodyPart textMime = new MimeBodyPart();
//		
//		MimeBodyPart fileMime = new MimeBodyPart();
//		
//		try {
//			
//			textMime.setText(EmailUtils.getEmailMessage(fullname, association, projectname, mentor));
//			
//			File file=new File(path);
//			fileMime.attachFile(file);
//			
//			
//			mimeMultipart.addBodyPart(textMime);
//			mimeMultipart.addBodyPart(fileMime);
//		
//			
//		} catch (Exception e) {
//			
//			e.printStackTrace();
//		}
//		
//		
//		m.setContent(mimeMultipart);
//		
//		
//		//send 
//		
//		//Step 3 : send the message using Transport class
//		Transport.send(m);
//		
//		
//		
//		}catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		
//		
//		
//		
//		
//		
//	
//		System.out.println("Sent success...................");
//		
//		
//	}
	

//	private MimeMessage getMimeMessage() {
//		return mailSender.createMimeMessage();
//	}
}
