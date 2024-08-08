import React, { useState } from 'react';
import PropertyList from './PropertyList';
import PropertyDetails from './PropertyDetails';

const properties = [
  { id: 1, address: "Patia", inspectionsPending: 2 },
  { id: 2, address: "Daruthenga", inspectionsPending: 1 },
];

const Dashboard = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      
      <PropertyList properties={properties} onSelect={setSelectedProperty} />
      {selectedProperty && <PropertyDetails property={selectedProperty} />}
    </div>
  );
};

export default Dashboard;
