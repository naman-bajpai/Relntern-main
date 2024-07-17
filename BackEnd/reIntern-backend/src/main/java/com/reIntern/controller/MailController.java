package com.reIntern.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reIntern.model.MailStructure;
import com.reIntern.service.EmailService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/mail")
public class MailController {

	@Autowired
	private EmailService emailService;
	
//	@PostMapping("/send/{mail}")
////	public String sendMail(@PathVariable String mail,@RequestBody MailStructure mailstructure) {
//	public String sendMail(@PathVariable String mail) {
////		emailService.sendEmail(mail, mailstructure);
//		emailService.sendEmail(mail);
//		return "successfully sent mail!!";
//	}
}
