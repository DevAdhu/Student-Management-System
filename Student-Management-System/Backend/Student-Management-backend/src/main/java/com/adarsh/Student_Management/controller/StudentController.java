package com.adarsh.Student_Management.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import com.adarsh.Student_Management.entity.Student;
import com.adarsh.Student_Management.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentService service;
    
    public StudentController(StudentService service) {
    	this.service = service;
    }

    @GetMapping("/all")
    public List<Student> getStudents() {
        return service.getAllStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
    	service.deleteStudent(id);
    }
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id,@RequestBody Student student) {
        return service.updateStudent(id, student);
    }
    @GetMapping
    public Page<Student> getStudents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return service.getStudents(page, size);
    }
}