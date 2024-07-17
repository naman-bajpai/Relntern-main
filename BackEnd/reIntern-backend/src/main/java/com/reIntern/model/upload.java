package com.reIntern.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="upload")
public class upload {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int internid;
	private String docname;
	private String date;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getInternid() {
		return internid;
	}
	public void setInternid(int internid) {
		this.internid = internid;
	}
	
	public String getDocname() {
		return docname;
	}
	public void setDocname(String docname) {
		this.docname = docname;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	public upload(int id, int internid, String docname, String date) {
		super();
		this.id = id;
		this.internid = internid;
		this.docname = docname;
		this.date = date;
	}
	public upload() {
		super();
	}
	
	@Override
	public String toString() {
		return "upload [id=" + id + ", internid=" + internid + ", docname=" + docname + ", date=" + date + "]";
	}
	

}
