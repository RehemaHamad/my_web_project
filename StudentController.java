package com.example.Register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/students")


    public class StudentController {

    StudentService studentService;

        @Autowired
        public StudentController(StudentService studentService) {
            this.studentService = studentService;
        }

        // Endpoint to get all students
        @GetMapping
        public List<StudentEntity> getAllStudents() {
            return studentService.getAllStudents();
        }

        // Endpoint to get a student by ID
        @GetMapping("/getById/{id}")
        public ResponseEntity<StudentEntity> getStudentById(@PathVariable Long id) {
            Optional<StudentEntity> studentOptional = studentService.getStudentById(id);
            return studentOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        }

        // Endpoint to create a new student
        @PostMapping("/add")
        public ResponseEntity<StudentEntity> createStudent(@RequestBody StudentEntity student) {
            StudentEntity createdStudent = studentService.createStudent(student);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
        }

        // Endpoint to update an existing student
        @PutMapping("/update/{id}")
        public ResponseEntity<StudentEntity> updateStudent(@PathVariable Long id, @RequestBody StudentEntity updatedStudent) {
            Optional<StudentEntity> studentOptional = studentService.updateStudent(id, updatedStudent);
            return studentOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        }

        // Endpoint to delete a student by ID
        @DeleteMapping("delete/{id}")
        public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
            studentService.deleteStudent(id);
            return ResponseEntity.noContent().build();
        }
    }

