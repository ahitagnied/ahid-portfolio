import React, { useEffect } from "react";

export function ProjectList({ projlist, isHome }) {
    useEffect(() => {
      document.title = "Projects | Ahitagni D";
  
      return () => {};
    }, []);

    return (
        <div style={{
            marginTop: isHome ? "10px" : "30px",
            maxWidth: "650px",
            margin: isHome ? "0" : "50px auto 0",
            padding: isHome ? "0" : "0 20px",
            fontFamily: "times new roman",
          }}>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "12px",
              width: "100%"
            }}>
              {projlist.map((proj, item) => (
                <div key={proj.title} style={{ 
                  padding: "12px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  backgroundColor: "#fbfcfa",
                  boxSizing: "border-box",
                  position: "relative"
                }}>
                  {/* links in top right */}
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "14px"
                  }}>
                    {proj.github && (
                      <a style={{
                          textDecoration: "none",
                          color: "#2d7093",
                          marginRight: "8px"
                      }} 
                      href={proj.github}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/7268/7268615.png" 
                            alt="external link"
                            style={{width: "12px", height: "12px"}}
                        />
                      </a>
                    )}
                    {proj.paper && (
                      <a style={{
                          textDecoration: "none",
                          color: "#2d7093"
                      }} 
                      href={proj.paper}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/2991/2991112.png" 
                            alt="external link"
                            style={{width: "12px", height: "12px"}}
                        />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h4 style={{ 
                    fontSize: "16px", 
                    marginBottom: "12px", 
                    marginTop: "0px", 
                    textAlign: "left", 
                    color: "#444",
                    fontWeight: "normal",
                    paddingRight: proj.github || proj.paper ? "80px" : "0", // Make room for links
                    fontFamily: "times new roman"
                  }}>
                    {proj.title}
                  </h4>

                  {/* Description */}
                  <p style={{ 
                    color: "#666", 
                    fontSize: "14px", 
                    lineHeight: "1.2", 
                    textAlign: "left",
                    margin: "0",
                    fontFamily: "times new roman"
                  }}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* show see more publications in home page */}
            {isHome && (
            <div style={{
                textAlign: "center", 
                marginTop: "30px",
                marginBottom: "20px"
            }}>
                <a 
                href="/projects" 
                style={{
                    textDecoration: "none",
                    color: "#2d7093",
                    fontSize: "14px",
                    fontFamily: "times new roman"
                }}
                >
                See more projects →
                </a>
            </div>
            )}

            {!isHome && (
            <div style={{
                textAlign: "center", 
                marginTop: "30px",
                marginBottom: "20px"
            }}>
                <a 
                href="https://github.com/ahitagnied/" 
                style={{
                    textDecoration: "none",
                    color: "#2d7093",
                    fontSize: "14px",
                    fontFamily: "times new roman"
                }}
                >
                See more on Github →
                </a>
            </div>
            )}
          </div>
  )
}