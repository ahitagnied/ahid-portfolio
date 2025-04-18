import React from 'react';
import Navbar from './NavBar';

function Layout({ children }) {
  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      flexDirection: 'column',
      width: '100%',
      overflowX: 'hidden' 
    }}>
      <Navbar />
      
      <main style={{ 
        flex: 1, 
        padding: '20px',
        marginTop: '20px', 
        maxWidth: '100%',
        width: '100%',
        boxSizing: 'border-box', 
        overflowX: 'hidden' 
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%'
        }}>
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;