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
        <div key={item.title} style={{ 
          paddingBottom: "15px", 
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}>
          <div>
            <h2 style={{ fontSize: "18px", marginTop: "0", textAlign: "left", color: "#373737"}}>
              {item.title}
            </h2>
            
            <p style={{ lineHeight: "1.4", textAlign: "left", color: "#5e5e5e",}}>
              {item.description}
            </p>

            <a style={{textDecoration: "none", color: "#2d7093"}} href={item.link}>{item.github}</a>

            <div style={{
              width: "80%",
              height: "1px",
              backgroundColor: "#e0e0e0",
              margin: "15px auto 0"
            }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}