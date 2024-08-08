import React from 'react';

const PropertyList = ({ properties, onSelect }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Existing Assigned Properties</h2>
      <ul className="space-y-2">
        {properties.map((property) => (
          <li
            key={property.id}
            className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelect(property)}
          >
            <div className="font-medium">{property.address}</div>
            <div className="text-sm text-gray-600">Inspections Pending: {property.inspectionsPending}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
