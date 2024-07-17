package com.reIntern.utils;

import java.sql.Date;


public class HRemailUtils {

	public static String getHRemailMessage(String name,String email,Date startdate,Date enddate,String domainid,String projectname,String mentor) {
		return "Hi,\n\nPlease find the updated details for below intern:-\n\nIntern Name - "+name+"\nStart Date - "
				+startdate+"\nEnd Date - "+enddate+"\nProject Title - "+projectname+"\nMentor - "+mentor+"\nOfficial Domain id - "
				+domainid+"\nPersonal Email Id - "+email+"\n\nPlease provide formal Internship certificate to "+name+" at "+email
						+ "\nPFA the files provided by "+name+".\n\nThanks & Regards,\nIntern Management System";
						
	}
}
