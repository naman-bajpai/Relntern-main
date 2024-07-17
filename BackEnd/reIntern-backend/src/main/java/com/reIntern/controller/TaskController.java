package com.reIntern.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.reIntern.model.Task;
import com.reIntern.model.addTask;
import com.reIntern.service.TaskService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(allowedHeaders = "*", origins = "http://localhost:4200")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/registerTask/{id}")
    public void registerTask(@PathVariable int id, @RequestBody Task task) {
        System.out.println(id);
        taskService.registerTask(id, task);
    }
    
    @GetMapping("/getTask")
    public List<Task> getTask() {
        return taskService.getTask();
    }
    
    @GetMapping("/getTaskById/{id}")
    public List<Task> getTaskById(@PathVariable int id) {
        System.out.println(id);
        return taskService.getTaskById(id);
    }
    
    @PutMapping("/updateTaskById/{id}")
    public ResponseEntity<String> updateTask(@PathVariable int id, @RequestBody Task updatedTask) {
    	updatedTask.setId(id);	
        taskService.updateTask(updatedTask);
        return new ResponseEntity<>("Task updated successfully", HttpStatus.OK);
    }
    
    @DeleteMapping("/deleteTask")
    public void deleteTask(@RequestParam Integer id) {
        taskService.deleteTask(id);
    }
    
}
