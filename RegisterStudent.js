import React, { useState } from 'react';
import { createStudent } from './studentservice'; 
import axios from 'axios';

const RegisterStudent = () => {
    const [formData, setFormData] = useState({
        studentID: '',
        name: '',
        address: '',
        parent: '',
        number: '',
        class: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { studentID, name, address, parent, number, class: studentClass } = formData;

        if (!studentID || !name || !address || !parent || !number || !studentClass) {
            alert('Please fill out all fields');
            return;
        }

        const registrationData = {
            studentID,
            name,
            address,
            parentName: parent,
            phoneNumber: number,
            class: studentClass
        };

        try {
            const createdStudent = await createStudent(registrationData);
            console.log('Registration successful:', createdStudent);
            alert('Registration successful for ' + name + ' in class ' + studentClass);
            setFormData({
                studentID: '',
                name: '',
                address: '',
                parent: '',
                number: '',
                class: ''
            });
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <div className="container" id="registrationContainer">
                <h1 style={{ color: 'aqua' }}>STUDENT REGISTRATION SYSTEM</h1>
                <form id="registrationForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="studentID">ID:</label>
                        <input
                            type="text"
                            id="studentID"
                            name="studentID"
                            value={formData.studentID}
                            onChange={handleChange}
                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="parent">Parent Name:</label>
                        <input
                            type="text"
                            id="parent"
                            name="parent"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Phone Number:</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class:</label>
                        <select
                            id="class"
                            name="class"
                            value={formData.studentClass}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a Class</option>
                            <option value="FORM ONE">FORM ONE</option>
                            <option value="FORM TWO">FORM TWO</option>
                            <option value="FORM THREE">FORM THREE</option>
                            <option value="FORM FOUR">FORM FOUR</option>
                        </select>
                    </div>
                    <button type="submit">REGISTER</button><br /><br />
                    <button type="reset" onClick={() => setFormData({
                        studentID: '',
                        name: '',
                        address: '',
                        parent: '',
                        number: '',
                        class: ''
                    })}>CLEAR</button><br /><br />
                </form>
                <p>
                    <a style={{ textDecoration: 'none' }} href="./">Back to Login</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterStudent;
