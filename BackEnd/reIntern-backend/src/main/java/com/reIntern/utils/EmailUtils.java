package com.reIntern.utils;

public class EmailUtils {

    public static String getEmailMessage(String fullname, String association, String projectname, String mentor) {
        return "Dear " + fullname + ",\n\n" +
                "Congratulations on your internship with " + association + ". You will be working on the " + projectname +
                " project under the mentorship of " + mentor + ".\n\n" +
                "Best Regards,\nYour Company";
    }
}