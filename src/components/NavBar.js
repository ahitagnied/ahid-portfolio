import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1110);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1110);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // navigation link component
  const NavLink = ({ to, children, isExternal }) => {
    const isActive = to === '/' ? location.pathname === to : location.pathname.includes(to);
    
    if (isExternal) {
      return (
        <a 
          href={to} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: 'gray',
            textDecoration: 'none',
            fontFamily: 'Lora',
            fontSize: '18px',
            display: 'block',
            marginBottom: '8px'
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={to}
        style={{ 
          color: isActive ? 'black' : 'gray',
          textDecoration: 'none',
          fontSize: '18px',
          fontFamily: 'Lora',
          display: 'block',
          marginBottom: '8px'
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* desktop nav */}
      <nav
        style={{
          position: isMobile ? 'relative' : 'fixed',
          left: isMobile ? 'auto' : 'calc(50% - 550px)',
          top: isMobile ? '0' : '50px',
          padding: '10px',
          display: isMobile ? 'none' : 'block',
          zIndex: 100,
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ 
            fontSize: '14px', 
            fontFamily: 'Lora',
            fontWeight: 'bold', 
            marginBottom: '15px',
            textTransform: 'uppercase'
          }}>
            NAVIGATION
          </h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reading">Reading</NavLink>
          <NavLink to="/writing">Writing</NavLink>
          <NavLink to="/deep-dives">Deep Dives</NavLink>
        </div>
        
        <div>
          <h3 style={{ 
            fontSize: '14px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            fontFamily: 'Lora',
            textTransform: 'uppercase'
          }}>
            FIND ME ON
          </h3>
          <NavLink to="https://github.com/ahitagnied" isExternal>GitHub</NavLink>
          <NavLink to="https://x.com/ahitagnied" isExternal>X</NavLink>
        </div>
      </nav>

      {/* mobile nav */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          borderBottom: '1px solid #eee',
          padding: '10px 20px',
          display: isMobile ? 'flex' : 'none',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reading">Reading</NavLink>
        </div>
        
        <button 
          onClick={toggleMenu}
          style={{
            marginRight: '50px',
            background: 'none',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ☰
        </button>
      </nav>

      {/* mobile menu dropdown */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50px',
            right: '30px',
            width: '120px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 99,
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/deep-dives">Deep Dives</NavLink>
          </div>
          
          <div>
            <h3 style={{ 
                fontSize: '12px', 
                fontWeight: 'bold', 
                marginBottom: '15px',
            }}>
            FIND ME ON
            </h3>
            <NavLink to="https://github.com/ahitagnied" isExternal>GitHub</NavLink>
            <NavLink to="https://x.com/ahitagnied" isExternal>X</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;