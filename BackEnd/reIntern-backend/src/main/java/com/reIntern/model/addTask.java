package com.reIntern.model;

public class addTask {

    private int internid;
    private Task task;
    
    public int getInternid() {
        return internid;
    }
    public void setInternid(int internid) {
        this.internid = internid;
    }
    public Task getTask() {
        return task;
    }
    public void setTask(Task task) {
        this.task = task;
    }
    public addTask() {
        super();
        // TODO Auto-generated constructor stub
    }
    @Override
    public String toString() {
        return "addTask [internid=" + internid + ", task=" + task + "]";
    }


}
