package com.example.Register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // Method to retrieve all students
    public List<StudentEntity> getAllStudents() {
        return studentRepository.findAll();
    }

    // Method to retrieve a student by ID
    public Optional<StudentEntity> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    // Method to create a new student
    public StudentEntity createStudent(StudentEntity student) {
        // Ensure the ID is null to prevent overwriting existing records
        return studentRepository.save(student);
    }

    // Method to update an existing student
    public Optional<StudentEntity> updateStudent(Long id, StudentEntity updatedStudent) {
        return studentRepository.findById(id).map(existingStudent -> {
            // Update the existing student with the new data
            existingStudent.setName(updatedStudent.getName());
            existingStudent.setAddress(updatedStudent.getAddress());
            existingStudent.setParentName(updatedStudent.getParentName());
            existingStudent.setPhoneNumber(updatedStudent.getPhoneNumber());
            existingStudent.setStudentClass(updatedStudent.getStudentClass());
            return studentRepository.save(existingStudent);
        });
    }

    // Method to delete a student by ID
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
