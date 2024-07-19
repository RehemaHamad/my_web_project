import React, { useState } from 'react';
import axios from 'axios';

const ManageStudent = () => {
    const [formData, setFormData] = useState({
        studentID: '',
        name: '',
        address: '',
        parent: '',
        number: '',
        class: ''
    });
    const [searchedStudentID, setSearchedStudentID] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/students/getById/${searchedStudentID}`);
            if (response.data) {
                setFormData({
                    studentID: response.data.id,
                    name: response.data.name,
                    address: response.data.address,
                    parent: response.data.parentName,
                    number: response.data.phoneNumber,
                    class: response.data.studentClass
                });
            }
        } catch (error) {
            console.error('Error searching for student:', error);
            alert('Student not found');
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/api/students/update/${formData.studentID}`, {
                id: formData.studentID,
                name: formData.name,
                address: formData.address,
                parentName: formData.parent,
                phoneNumber: formData.number,
                studentClass: formData.class
            });
            alert('Student updated successfully');
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/students/delete/${formData.studentID}`);
            setFormData({
                studentID: '',
                name: '',
                address: '',
                parent: '',
                number: '',
                class: ''
            });
            alert('Student deleted successfully');
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div>
            <h2>Manage Student</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by Student ID"
                    value={searchedStudentID}
                    onChange={(e) => setSearchedStudentID(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {formData.studentID && (
                <div className="form-group">
                    <label htmlFor="name">Student Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="address">Student Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <label htmlFor="parent">Parent Name:</label>
                    <input
                        type="text"
                        id="parent"
                        name="parent"
                        value={formData.parentName}
                        onChange={handleChange}
                    />
                    <label htmlFor="number">Phone Number:</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <label htmlFor="class">Class:</label>
                    <select
                        id="class"
                        name="class"
                        value={formData.studentClass}
                        onChange={handleChange}
                    >
                        <option value="">Select a Class</option>
                        <option value="FORM ONE">FORM ONE</option>
                        <option value="FORM TWO">FORM TWO</option>
                        <option value="FORM THREE">FORM THREE</option>
                        <option value="FORM FOUR">FORM FOUR</option>
                    </select>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default ManageStudent;
