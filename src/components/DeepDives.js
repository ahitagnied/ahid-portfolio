import React, { useEffect } from "react";

export function DeepDives({ deepdives }) {
    useEffect(() => {
      document.title = "Deep Dives | Ahitagni D";
  
      return () => {};
    }, []);

    return (
      <div style={{
          marginTop: "30px",
          maxWidth: "650px",
          margin: "30px auto 0",
          padding: "0 10px",
          fontFamily: "times new roman",
      }}>
      {deepdives.map((item) => (
        <div>
          <div key={item.title} style={{ 
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
          }}>
            <div>
              <h2 style={{ 
                fontSize: "16px", 
                marginTop: "0", 
                textAlign: "left", 
                color: "#111",
                fontWeight: "normal",
              }}>
                {item.title} <a style={{
                                textDecoration: "none", 
                                color: "#2d7093"
                              }}
                              href={item.link}>
                                {item.github}
                              </a>
              </h2>
              
              <p style={{ 
                fontSize: "16px", 
                lineHeight: "1.2", 
                textAlign: "left", 
                color: "#666", 
              }}>
                {item.description}
              </p>
            </div>
          </div>
          
          {/* divider */}
          <div style={{
                width: "100%",
                height: "1px",
                borderBottom: "1.5px dashed #e0e0e0", 
                marginBottom: "10px",
              }}>
          </div>
        </div>
      ))}
    </div>
  )
}