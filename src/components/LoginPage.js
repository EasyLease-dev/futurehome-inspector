import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-sm w-full relative">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="relative mb-4">
          <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full pl-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative mb-6">
          <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
