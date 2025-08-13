import React, { useEffect } from "react";

export function ProjectList({ projlist, showPage }) {
    useEffect(() => {
      document.title = "Projects | Ahitagni D";
  
      return () => {};
    }, []);

    return (
        <div style={{
            marginTop: "10px",
            maxWidth: "650px",
            margin: "0",
            padding: "0",
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
                  position: "relative",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease"
                }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f4f8"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f8f9f6ff"}
                  onClick={() => {
                    if (proj.github && proj.paper) {
                      window.open(proj.github, '_blank');
                    } else if (proj.github) {
                      window.open(proj.github, '_blank');
                    } else if (proj.paper) {
                      window.open(proj.paper, '_blank');
                    }
                  }}>
                  {/* links in top right */}
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    {proj.github && (
                      <a style={{
                          textDecoration: "none",
                          color: "#2d7093",
                      }} 
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/8944/8944297.png" 
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
                      href={proj.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/6639/6639062.png" 
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
                    paddingRight: proj.github || proj.paper ? "80px" : "0",
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
            {showPage && (
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

            {!showPage && (
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