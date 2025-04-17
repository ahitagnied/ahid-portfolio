import React, { useState, useRef, useEffect } from "react";

// no need for book type definition if we're not using typescript
export function Bookshelf({ books }) {
  const [bookIndex, setBookIndex] = useState(-1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  // refs for scrolling
  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  
  // width and height constants
  const width = 41.5;
  const height = 220;
  const spineWidth = `${width}px`;
  const coverWidth = `${width * 4}px`;
  const bookWidth = `${width * 5}px`;
  const bookHeight = `${height}px`;

  // handle arrow hover for scrolling
  const startScroll = (direction) => {
    if (scrollIntervalRef.current) return;
    
    setScrollDirection(direction);
    setIsScrolling(true);
    
    scrollIntervalRef.current = setInterval(() => {
      if (containerRef.current) {
        const scrollAmount = direction === 'left' ? -3 : 3;
        containerRef.current.scrollLeft += scrollAmount;
      }
    }, 16); // ~60fps
  };
  
  const scrollBookToCenter = (index) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const bookWidth = width + 10; // book width + gap
      
      // calculate where this book is positioned
      const bookPosition = (bookWidth * index) + 40; // Add padding offset
      
      // center it in the container
      const scrollPosition = bookPosition - (containerWidth / 2) + (width / 2);
      
      // apply the scroll
      containerRef.current.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrolling(false);
    setScrollDirection(null);
  };

  // cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div>
    <div style={{ 
      position: "relative", 
      display: "flex",
      justifyContent: "center",
      width: "50%", 
      margin: "0 auto" 
    }}>
      {/* svg filter for paper texture */}
      <svg style={{ position: "absolute", inset: 0, visibility: "hidden" }}>
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="8" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight">
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      {/* bookshelf container with left/right arrows */}
      <div style={{ 
        position: "relative", 
        display: "flex", 
        alignItems: "center",
        width: "600px", // Fixed preferred width
        minWidth: "400px", // Minimum width before it starts shrinking
        maxWidth: "100%"  // Allow scaling down on very small screens
      }}>
        {/* left arrow */}
        <div 
          onMouseEnter={() => startScroll('left')}
          onMouseLeave={stopScroll}
          onTouchStart={() => startScroll('left')}
          onTouchEnd={stopScroll}
          style={{
            cursor: "pointer",
            width: "30px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            userSelect: "none",
            zIndex: 10,
            minWidth: "30px",
            opacity: scrollDirection === 'left' ? 0.8 : 0.5,
          }}
        >
          ‹
        </div>

        {/* scrollable book container */}
        <div
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: isScrolling ? "auto" : "smooth",
            scrollbarWidth: "none", // firefox
            msOverflowStyle: "none", // ie
            WebkitOverflowScrolling: "touch",
            padding: "20px 0",
            flex: 1,
          }}
        >
          <style>
            {`
            /* hide scrollbar for chrome, safari and opera */
            div::-webkit-scrollbar {
              display: none;
            }
            `}
          </style>
          
          {/* books */}
          <div style={{ 
            display: "flex", 
            gap: "10px",
            padding: "0 40px",
          }}>
            {books.map((book, index) => (
              <button
                key={book.title}
                onClick={() => {
                  if (index === bookIndex) {
                    setBookIndex(-1);
                    setSelectedBook(null);
                  } else {
                    setBookIndex(index);
                    setSelectedBook(book);
                    scrollBookToCenter(index);
                  }
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  outline: "none",
                  flexShrink: 0,
                  width: bookIndex === index ? bookWidth : spineWidth,
                  perspective: "1000px",
                  WebkitPerspective: "1000px",
                  transition: "all 500ms ease",
                  border: "none",
                  background: "transparent",
                  padding: 0,
                }}
              >
                {/* book spine */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: spineWidth,
                    height: bookHeight,
                    flexShrink: 0,
                    transformOrigin: "right",
                    backgroundColor: book.spineColor,
                    color: book.textColor,
                    transform: `rotateY(${bookIndex === index ? "-60deg" : "0deg"})`,
                    transition: "all 500ms ease",
                    filter: "brightness(0.8) contrast(2)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span
                    style={{
                      pointerEvents: "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: bookHeight,
                      width: spineWidth,
                      opacity: 0.4,
                      filter: "url(#paper)",
                    }}
                  />
                  <h2
                    style={{
                      marginTop: "12px",
                      fontSize: "12px",
                      fontFamily: `"DM Sans", sans-serif`,
                      writingMode: "vertical-rl",
                      userSelect: "none",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      maxHeight: `${height - 24}px`,
                    }}
                  >
                    {book.title}
                  </h2>
                </div>
                
                {/* book cover */}
                <div
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    overflow: "hidden",
                    transformOrigin: "left",
                    transform: `rotateY(${bookIndex === index ? "30deg" : "88.8deg"})`,
                    transition: "all 500ms ease",
                    filter: "brightness(0.8) contrast(2)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span
                    style={{
                      pointerEvents: "none",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      height: bookHeight,
                      width: coverWidth,
                      opacity: 0.4,
                      filter: "url(#paper)",
                    }}
                  />
                  <span
                    style={{
                      pointerEvents: "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: bookHeight,
                      width: coverWidth,
                      background: `linear-gradient(to right, rgba(255,255,255,0) 2px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.25) 4px, rgba(255,255,255,0.25) 6px, transparent 7px, transparent 9px, rgba(255,255,255,0.25) 9px, transparent 12px)`,
                    }}
                  />
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    width={coverWidth}
                    height={bookHeight}
                    style={{
                      transition: "all 500ms ease",
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* right arrow */}
        <div 
          onMouseEnter={() => startScroll('right')}
          onMouseLeave={stopScroll}
          onTouchStart={() => startScroll('right')}
          onTouchEnd={stopScroll}
          style={{
            cursor: "pointer",
            width: "30px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            userSelect: "none",
            minWidth: "30px",
            zIndex: 10,
            opacity: scrollDirection === 'right' ? 0.8 : 0.5,
          }}
        >
          ›
        </div>
      </div>
    </div>
      {selectedBook && (
        <div style={{
          marginTop: "30px",
          maxWidth: "500px",
          margin: "50px auto 0",
          padding: "0 10px",
          fontFamily: "times new roman",
        }}>
          <h2 style={{ fontSize: "24px", marginBottom: "10px"}}>
            {selectedBook.title}
          </h2>
          
          {selectedBook.author && (
            <p style={{ color: "#666", marginBottom: "10px" }}>
              By: {selectedBook.author}
            </p>
          )}
          
          <p style={{ lineHeight: "1.2" }}>
            {selectedBook.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default Bookshelf;