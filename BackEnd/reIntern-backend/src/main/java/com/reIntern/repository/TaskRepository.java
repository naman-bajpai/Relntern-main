package com.reIntern.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.reIntern.model.Task;



@Repository
public interface TaskRepository extends JpaRepository<Task,Integer>{

    List<Task> findAllById(int id);

    @Query(value="Select * from intern_management_system.taskdata where intern_id=:id",nativeQuery=true)
    List<Task> findByInternId(int id);

}
