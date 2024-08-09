import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded shadow-inner">
      <h2 className="text-xl font-semibold mb-2">Property Details</h2>
      <div className="mb-2">
        <span className="font-medium">Address: </span>{property.address}
      </div>
      <div className="mb-2">
        <span className="font-medium">Scheduled Visit: </span>2024-08-15 10:00 AM
      </div>
      <div className="mb-2">
        <span className="font-medium">Landlord: </span>S Sahoo
      </div>
      <h3 className="text-lg font-semibold mt-4">Inspection Details</h3>
      <textarea className="w-full p-1 border rounded mt-2" rows="2" placeholder="Enter inspection details..."></textarea>

      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
};

export default PropertyDetails;
