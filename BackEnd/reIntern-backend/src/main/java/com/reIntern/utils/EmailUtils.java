package com.reIntern.utils;

public class EmailUtils {

	public static String getEmailMessage(String name,String association,String projectname,String mentor) {
		return "Dear "+name+",\n\nWe are pleased to offer you an internship with Reliance Industries Limited. You will be working with our "
						+association+" team.\n\nPl. find your project details as below:\n\nProject Title: "+projectname+"\nProject Mentor: "+mentor+"\nLocation: RCP";
	}
}
