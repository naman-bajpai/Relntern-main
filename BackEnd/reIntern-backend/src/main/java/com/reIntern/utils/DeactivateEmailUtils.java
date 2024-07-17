package com.reIntern.utils;

import java.sql.Date;

public class DeactivateEmailUtils {

	public static String getDeactivateEmailMessage(String name,Date startdate,Date enddate,String domainid) {
		return "Hi Team,\n\nKindly deactivate the Zmail account for "+name+" as the internship is completed. The I-Card is submitted to HR.\n\nIntern Name - "+name+"\nStart Date - "
		+startdate+"\nEnd Date - "+enddate+"\nOfficial domain id - "+domainid+"\n\nThanks & Regards,\nIntern Management System";
						
	}
}
