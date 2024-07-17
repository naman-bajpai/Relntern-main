package com.reIntern.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 *
 */
@Entity
@Table(name = "Taskdata")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String task;
    private String description;
    private Date start;
    private Date end;
    private int mentor_id;
    private String status;
    private Date actualstart;
    private Date actualend;
    
    

//	@ManyToOne
//	@JoinColumn(name = "Intern_id")
//    private Intern intern;


    public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getActualstart() {
		return actualstart;
	}
	public void setActualstart(Date actualstart) {
		this.actualstart = actualstart;
	}
	public Date getActualend() {
		return actualend;
	}
	public void setActualend(Date actualend) {
		this.actualend = actualend;
	}
	public int getMentor_id() {
		return mentor_id;
	}
	public void setMentor_id(int mentor_id) {
		this.mentor_id = mentor_id;
	}
	public int getId() {
        return id;
    }
	public void setId(int id) {
        this.id = id;
    }
    public String getTask() {
        return task;
    }
    public void setTask(String task) {
        this.task = task;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Date getStart() {
        return start;
    }
    public void setStart(Date start) {
        this.start = start;
    }
    public Date getEnd() {
        return end;
    }
    public void setEnd(Date end) {
        this.end = end;
    }
    public int getMentorid() {
		return mentor_id;
	}
	public void setMentorid(int mentorid) {
		this.mentor_id = mentorid;
	}
	
}
