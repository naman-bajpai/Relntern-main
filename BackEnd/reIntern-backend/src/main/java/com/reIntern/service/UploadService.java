package com.reIntern.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reIntern.model.Task;
import com.reIntern.model.upload;
import com.reIntern.repository.UploadRepository;

@Service
public class UploadService {

	@Autowired
    private UploadRepository uploadrepository;
	
	public upload uploadDocument(upload upload) {
		try {
			return uploadrepository.save(upload);
		}catch(Exception ex){
			System.out.println(ex);
		}
		return null;
	}

	public List<upload> getDocumentByInternId(int id) {
		try {
            return uploadrepository.findByInternid(id);
        }
        catch(Exception ex) {
            System.out.println(ex);
        }
        return null;
	}

}
