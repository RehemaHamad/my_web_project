import React, { useState } from 'react';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Handle password change logic here
        alert('Password changed successfully');
    };

    return (
        <div>
            <h2>Change Password</h2>
            <div className="form-group">
                <label htmlFor="password">New Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
};

export default ChangePassword;
