
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const InspectorPhotoOverlay = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        <div className="flex flex-col items-center">
          <img
            src="/path-to-inspector-photo.jpg" 
            alt="Inspector"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">Inspector Name</h2>
          <p className="text-center text-gray-700">
            
            Position: Senior Property Inspector<br />
            Experience: 10+ years<br />
            Email: inspector@example.com
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default InspectorPhotoOverlay;
