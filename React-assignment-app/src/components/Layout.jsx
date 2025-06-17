import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, navbarProps, footerProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar {...navbarProps} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
};

export default Layout;