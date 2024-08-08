import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaTachometerAlt, FaClipboardList, FaClipboardCheck, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar, onSelectSection, onLogout, activeSection }) => {
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inspectorDetails, setInspectorDetails] = useState({
    name: 'S Sahoo',
    email: 'sahoo@example.com'
  });
  const [formDetails, setFormDetails] = useState(inspectorDetails);

  const handleProfileClick = () => {
    setShowProfileOverlay(!showProfileOverlay);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInspectorDetails(formDetails);
    setIsEditing(false);
  };

  return (
    <div className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 h-screen relative`}>
      <button onClick={toggleSidebar} className="p-2">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div className="mt-4 flex justify-center">
        <FaUserCircle size={48} onClick={handleProfileClick} className="cursor-pointer" />
      </div>
      <div className="mt-4 flex flex-col items-start">
        <button
          onClick={() => onSelectSection('dashboard')}
          className={`block w-full p-2 text-left flex items-center ${activeSection === 'dashboard' ? 'bg-gray-600' : ''}`}
        >
          <FaTachometerAlt className="mr-2" />
          {isOpen && 'Dashboard'}
        </button>
        <button
          onClick={() => onSelectSection('newPropertyInspection')}
          className={`block w-full p-2 text-left flex items-center ${activeSection === 'newPropertyInspection' ? 'bg-gray-600' : ''}`}
        >
          <FaClipboardList className="mr-2" />
          {isOpen && 'New Property Inspection'}
        </button>
        <button
          onClick={() => onSelectSection('inspectionCriteria')}
          className={`block w-full p-2 text-left flex items-center ${activeSection === 'inspectionCriteria' ? 'bg-gray-600' : ''}`}
        >
          <FaClipboardCheck className="mr-2" />
          {isOpen && 'Inspection Criteria'}
        </button>
      </div>
      <button
        onClick={onLogout}
        className="block w-full p-2 text-left absolute bottom-0 bg-red-600 hover:bg-red-700 flex items-center justify-center"
      >
        <FaSignOutAlt className="mr-2" />
        {isOpen && 'Logout'}
      </button>
      {showProfileOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md text-black w-80">
            <h2 className="text-xl font-semibold mb-2">Inspector Details</h2>
            {isEditing ? (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formDetails.name}
                    onChange={handleFormChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    onChange={handleFormChange}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <p>Name: {inspectorDetails.name}</p>
                <p>Email: {inspectorDetails.email}</p>
                <button
                  onClick={handleEditClick}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={handleProfileClick}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
