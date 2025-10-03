import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Icon components
  const HomeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );

  const BookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );

  const FileIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
    </svg>
  );

  const EditIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  );

  const GithubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );

  const ScholarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );

  // navigation link component
  const NavLink = ({ to, children, icon, isExternal, title, isMobileLayout }) => {
    const isActive = to === '/' ? location.pathname === to : location.pathname.includes(to);
    
    const linkStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isMobileLayout ? '32px' : '36px',
      height: isMobileLayout ? '32px' : '36px',
      borderRadius: '8px',
      color: isActive ? '#000' : '#555',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
      border: isActive ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
      marginBottom: isMobileLayout ? '0' : '6px',
      marginRight: isMobileLayout ? '6px' : '0',
      position: 'relative',
      cursor: 'pointer'
    };
    
    if (isExternal) {
      return (
        <a 
          href={to} 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle}
          title={title}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = isActive ? 'rgba(255, 255, 255, 0.4)' : 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          {icon}
        </a>
      );
    }

    return (
      <Link
        to={to}
        style={linkStyle}
        title={title}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          e.target.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isActive ? 'rgba(255, 255, 255, 0.4)' : 'transparent';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        {icon}
      </Link>
    );
  };

  return (
    <>
      {/* universal horizontal nav */}
      <nav
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          padding: '6px 10px',
          backgroundColor: 'rgba(128, 128, 128, 0.15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          zIndex: 100,
          gap: '4px'
        }}
      >
        <NavLink to="/" icon={<HomeIcon />} title="Home" isMobileLayout={true} />
        <NavLink to="/reading" icon={<BookIcon />} title="Reading" isMobileLayout={true} />
        <NavLink to="/publications" icon={<FileIcon />} title="Publications" isMobileLayout={true} />
        <NavLink to="/essays" icon={<EditIcon />} title="Essays" isMobileLayout={true} />
        
        {/* Divider */}
        <div style={{
          width: '1px',
          height: '18px',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          margin: '0 3px'
        }} />
        
        <NavLink to="https://github.com/ahitagnied" icon={<GithubIcon />} isExternal title="GitHub" isMobileLayout={true} />
        <NavLink to="https://scholar.google.com/citations?user=GLTc7LcAAAAJ&hl=en" icon={<ScholarIcon />} isExternal title="Google Scholar" isMobileLayout={true} />
      </nav>
    </>
  );
}

export default Navbar;