import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import NewPropertyInspection from './NewPropertyInspection';
import InspectionCriteria from './InspectionCriteria';

const MainDashboard = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState('dashboard');

  const renderSection = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'newPropertyInspection':
        return <NewPropertyInspection />;
      case 'inspectionCriteria':
        return <InspectionCriteria />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onSelectSection={setSelectedSection}
        onLogout={onLogout}
        activeSection={selectedSection}
      />
      <div className="flex-grow p-4">{renderSection()}</div>
    </div>
  );
};

export default MainDashboard;
