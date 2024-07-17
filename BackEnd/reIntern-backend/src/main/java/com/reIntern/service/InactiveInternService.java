package com.reIntern.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reIntern.model.InactiveIntern;
import com.reIntern.repository.*;

@Service
public class InactiveInternService {

    @Autowired
    private InactiveInternRepository inactiveInternRepository;

    public List<InactiveIntern> getInactiveInterns() {
        return (List<InactiveIntern>) inactiveInternRepository.findAll();
    }


    public void deleteInactiveIntern(Integer id) {
        inactiveInternRepository.deleteById(id);
    }

    public InactiveIntern getInternById(int id) {
        return inactiveInternRepository.findById(id).get();
    }

}