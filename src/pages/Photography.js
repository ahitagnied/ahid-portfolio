import React, { useEffect, useState } from 'react';
import { photos } from '../contents/Photos';

function Photography() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    document.title = "Photos | Ahitagni D";
  }, []);

  const GAP = '10px';
  const COLUMNS = { desktop: 2, mobile: 1, breakpoint: 650 };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    margin: 0,
    padding: 0
  };

  if (expandedIndex !== null) {
    const photo = photos[expandedIndex];
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          zIndex: 99,
          padding: "20px",
          boxSizing: "border-box"
        }}
        onClick={() => setExpandedIndex(null)}
      >
        <div style={{ width: "100%", maxWidth: "650px", margin: "0 auto", fontFamily: "Lora" }}>
          <img src={`/photography/${photo.filename}`} alt={photo.location} style={imageStyle} />
          {photo.location && (
            <div style={{ color: "#666", fontSize: "14px", textAlign: "right", marginTop: "8px", fontFamily: "Lora", lineHeight: "1.2" }}>
              {photo.location}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "650px", margin: "0 auto", fontFamily: "Lora", lineHeight: "1.2", fontSize: "12px" }} onClick={() => setExpandedIndex(null)}>
      <style>{`
        .photos-masonry {
          column-count: ${COLUMNS.desktop};
          column-gap: ${GAP};
          column-fill: balance;
          width: 100%;
          line-height: 0;
        }
        .photos-masonry > * {
          line-height: normal;
        }
        @media (max-width: ${COLUMNS.breakpoint}px) {
          .photos-masonry {
            column-count: ${COLUMNS.mobile};
          }
        }
      `}</style>
      <div className="photos-masonry">
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              display: "inline-block",
              marginBottom: GAP,
              padding: 0,
              breakInside: "avoid",
              pageBreakInside: "avoid",
              verticalAlign: "top",
              cursor: "pointer"
            }}
            onClick={(e) => {
              e.stopPropagation();
              setExpandedIndex(index);
            }}
          >
            <img src={`/photography/${photo.filename}`} alt={photo.location} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photography;