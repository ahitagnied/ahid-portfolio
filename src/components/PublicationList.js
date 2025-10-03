import React, { useEffect } from "react";

export function PublicationList({ publist, isHome }) {
    useEffect(() => {
      document.title = "Publications | Ahitagni D";
    }, []);

    return (
        <div style={{
            marginTop: isHome ? "10px" : "0",
            maxWidth: "650px",
            margin: isHome ? "0" : "0 auto",
            fontFamily: "Lora",
          }}>

            {publist.map((pubs, item) => (
              <div key={pubs.title}>
                <div style={{ 
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "8px",
                  paddingBottom: "8px"
                }}>

                  <div style={{ 
                      width: "90%",
                      paddingRight: "20px"
                  }}>
                      <a style={{
                          textDecoration: "none", 
                          color: "#666",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "1.4",
                          wordWrap: "break-word"
                      }} 
                      href={pubs.paper}>
                          {pubs.title}
                      </a>
                  </div>

                  <div style={{ 
                      width: "20%",
                      color: "#666", 
                      fontSize: "14px", 
                      textAlign: "right",
                      lineHeight: "1.2"
                  }}>
                      {pubs.journal}
                  </div>

                </div>

                {item < publist.length - 1 && (
                  <div style={{
                    borderBottom: "1px dotted #ccc"
                  }}></div>
                )}
              </div>
            ))}

            {isHome && (
            <div style={{
                textAlign: "center", 
                marginTop: "10px",
                marginBottom: "20px"
            }}>
                <a 
                href="/publications" 
                style={{
                    textDecoration: "none",
                    color: "#2d7093",
                    fontSize: "14px"
                }}
                >
                See more publications →
                </a>
            </div>
            )}
          </div>
  )
}