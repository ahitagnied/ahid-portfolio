import React, { useState, useEffect } from 'react';

export default function PhotoGallery({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    e.preventDefault();
  };
  
  const handleMouseUp = (e) => {
    if (!isDragging || !dragStart) return;
    const dragEnd = e.clientX;
    const diff = dragStart - dragEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
    setIsDragging(false);
    setDragStart(null);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
  };

  if (!photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  // Extracted styles
  const containerStyle = {
    width: '100%',
    maxWidth: '100%',
    margin: isMobile ? '0' : '10px 0',
    padding: '0',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: isMobile ? '100vw' : '100%',
    aspectRatio: '5/3',
    borderRadius: isMobile ? '0' : '6px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
    marginLeft: isMobile ? 'calc(-50vw + 50%)' : '0',
    marginRight: isMobile ? 'calc(-50vw + 50%)' : '0',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: isDragging ? 'grabbing' : 'grab',
    display: 'block',
    userSelect: 'none',
    WebkitUserSelect: 'none',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
    pointerEvents: 'none',
  };

  const locationStyle = {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    color: 'white',
    fontSize: '10px',
    fontWeight: '600',
    fontFamily: 'sans-serif',
    letterSpacing: '0.02em',
  };

  const controlsStyle = {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
  };

  const dotsContainerStyle = {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    padding: '6px 10px',
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
  };

  const arrowButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.8)',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    width: '14px',
    height: '14px',
  };

  const dotButtonStyle = (isActive) => ({
    width: isActive ? '18px' : '6px',
    height: '6px',
    borderRadius: '3px',
    border: 'none',
    background: isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: 0,
    outline: 'none',
  });

  const handleDotHover = (e, isActive) => {
    if (!isActive) {
      e.target.style.background = 'rgba(255, 255, 255, 0.6)';
    }
  };

  const handleDotLeave = (e, isActive) => {
    if (!isActive) {
      e.target.style.background = 'rgba(255, 255, 255, 0.4)';
    }
  };

  const handleArrowHover = (e) => {
    e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleArrowLeave = (e) => {
    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img
          src={`/photography/${currentPhoto.filename}`}
          alt={currentPhoto.location || 'Photography'}
          style={imageStyle}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          draggable={false}
        />
        
        <div style={overlayStyle} />

        {currentPhoto.location && (
          <div style={locationStyle}>
            {currentPhoto.location}
          </div>
        )}

        <div style={controlsStyle}>
          {!isMobile && (
            <button
              onClick={prevImage}
              style={arrowButtonStyle}
              onMouseEnter={handleArrowHover}
              onMouseLeave={handleArrowLeave}
              aria-label="Previous image"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          <div style={dotsContainerStyle}>
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={dotButtonStyle(index === currentIndex)}
                onMouseEnter={(e) => handleDotHover(e, index === currentIndex)}
                onMouseLeave={(e) => handleDotLeave(e, index === currentIndex)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {!isMobile && (
            <button
              onClick={nextImage}
              style={arrowButtonStyle}
              onMouseEnter={handleArrowHover}
              onMouseLeave={handleArrowLeave}
              aria-label="Next image"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}