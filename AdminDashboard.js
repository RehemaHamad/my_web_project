import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import Dashboard from './Dashboard';
import ManageStudent from './ManageStudent';
import ChangePassword from './ChangePassword';
import RegisterStudent from './RegisterStudent';

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'dashboard':
                return <Dashboard />;
            case 'manageStudent':
                return <ManageStudent />;
            case 'changePassword':
                return <ChangePassword />;
            case 'registerStudent':
                return <RegisterStudent />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="left-section">
                <h2>ADMIN DASHBOARD</h2>
                <button onClick={() => setActiveSection('dashboard')}>Dashboard</button>
                <button onClick={() => setActiveSection('registerStudent')}>Register Student</button>
                <button onClick={() => setActiveSection('manageStudent')}>Manage Student</button>
                <button onClick={() => setActiveSection('changePassword')}>Change Password</button>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            <div className="right-section">
                {renderSection()}
            </div>
        </div>
    );
};

export default AdminDashboard;
