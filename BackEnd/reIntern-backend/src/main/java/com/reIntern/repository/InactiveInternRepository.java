package com.reIntern.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.reIntern.model.*;


@Repository
public interface InactiveInternRepository extends JpaRepository<InactiveIntern, Integer> {
    // Custom query methods (if any) can be added here
}

