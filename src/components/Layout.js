// src/components/Layout.js
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
