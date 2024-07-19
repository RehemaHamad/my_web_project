import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [registeredStudents, setRegisteredStudents] = useState([]);
    const [searchedStudentID, setSearchedStudentID] = useState('');

    useEffect(() => {
        fetchAllStudents();
    }, []);

    const fetchAllStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/students');
            setRegisteredStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/students/getById/${searchedStudentID}`);
            setRegisteredStudents([response.data]);
        } catch (error) {
            console.error('Error searching for student:', error);
            alert('Student not found');
        }
    };

    return (
        <div>
            <h2>DASHBOARD</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by Student ID"
                    value={searchedStudentID}
                    onChange={(e) => setSearchedStudentID(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table className="students-table">
                <thead>
                    <tr>
                        <th>STUDENT ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>PARENT NAME</th>
                        <th>PHONE NUMBER</th>
                        <th>CLASS</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>{student.parentName}</td>
                            <td>{student.phoneNumber}</td>
                            <td>{student.studentClass}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
