package com.reIntern.model;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.*;

@Entity
@Table(name="MentorDetails")
public class Mentor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int mentorid;
    private String mentorname;
    private String mentoremail;
    private String l1email;
    private String l1name;
    private String Role;
    private String Association;
    private int mentoruserid;
    
    public int getMentoruserid() {
		return mentoruserid;
	}
	public void setMentoruserid(int mentoruserid) {
		this.mentoruserid = mentoruserid;
	}
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "USER_R OLE",
            joinColumns = {
                    @JoinColumn(name="USER_ID")

            },
            inverseJoinColumns = {
                    @JoinColumn(name="ROLE_ID")
            }
    )

    private Set<Role> role;

    public void setRole(Set<Role> role) {
        this.role = role;
    }
    public int getMentorid() {
        return mentorid;
    }
    public void setMentorid(int mentorid) {
        this.mentorid = mentorid;
    }
    public String getMentorname() {
        return mentorname;
    }
    public void setMentorname(String mentorname) {
        this.mentorname = mentorname;
    }
    public String getMentoremail() {
        return mentoremail;
    }
    public String getL1email() {
		return l1email;
	}
	public void setL1email(String l1email) {
		this.l1email = l1email;
	}
	public String getL1name() {
		return l1name;
	}
	public void setL1name(String l1name) {
		this.l1name = l1name;
	}
	public void setMentoremail(String mentoremail) {
        this.mentoremail = mentoremail;
    }

    
    public String getRole() {
        return Role;
    }
    public void setRole(String role) {
        Role = role;
    }
    public String getAssociation() {
        return Association;
    }
    public void setAssociation(String association) {
        Association = association;
    }


}
