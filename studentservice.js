import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/students';

const getAllStudents = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('There was an error retrieving the students!', error);
        throw error;
    }
};

const getStudentById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/getById/${id}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error retrieving the student with ID ${id}!`, error);
        throw error;
    }
};

const createStudent = async (student) => {
    try {
        const response = await axios.post(`${BASE_URL}/add`, student);
        return response.data;
    } catch (error) {
        console.error('There was an error creating the student!', error);
        throw error;
    }
};

const updateStudent = async (id, student) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, student);
        return response.data;
    } catch (error) {
        console.error(`There was an error updating the student with ID ${id}!`, error);
        throw error;
    }
};

const deleteStudent = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error(`There was an error deleting the student with ID ${id}!`, error);
        throw error;
    }
};

export {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
