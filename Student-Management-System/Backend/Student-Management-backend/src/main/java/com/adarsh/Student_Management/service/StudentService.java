package com.adarsh.Student_Management.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.adarsh.Student_Management.entity.Student;
import com.adarsh.Student_Management.repository.StudentRepository;

@Service
public class StudentService {

    
    private final StudentRepository repository;
    
    public StudentService(StudentRepository repository) {
    	this.repository = repository;
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
    	if (student.getEmail()== null) {
    		throw new IllegalArgumentException("Email cannot be null");
    	}
        return repository.save(student);
    }
    public void deleteStudent(Long id) {
    	repository.deleteById(id);
    }
    public Student updateStudent(Long id, Student updatedStudent) {
        Student student = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        student.setName(updatedStudent.getName());
        student.setEmail(updatedStudent.getEmail());

        return repository.save(student);
    }
    public Page<Student> getStudents(int page, int size) {
    	Pageable pageable = PageRequest.of(page, size);
        return repository.findAll(pageable);
    }
}