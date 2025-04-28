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

            {projlist.map((proj, item) => (
              
              <div key={proj.title} style={{ 
                marginBottom: "10px", 
                display: "flex",
                gap: "20px",
                alignItems: "flex-start"
              }}>

                {/* cover image */}
                <img 
                  src={proj.coverImage} 
                  alt={proj.title}
                  style={{
                    marginTop: "5px",
                    width: "100px",
                    objectFit: "cover",
                  }}
                />

                <div>
                    {/* cover image */}
                    <h4 style={{ fontSize: "16px", marginBottom: "4px", marginTop: "0px", textAlign: "left", color: "#444"}}>
                        {proj.title}
                    </h4>

                    {/* authors */}
                    <p style={{ color: "#666", fontSize: "14px", margin: "0px", textAlign: "left" }}>
                        {proj.members}
                    </p>

                    <p style={{ color: "#666", fontSize: "14px", margin: "0px", textAlign: "left" }}>
                        {proj.github && (
                            <a style={{
                                textDecoration: "none",
                                color: "#2d7093",
                                marginRight: "4px"
                            }} 
                            href={proj.github}>
                                [Code]
                            </a>
                        )}
                        {proj.paper && (
                            <a style={{
                                textDecoration: "none",
                                color: "#2d7093",
                                marginRight: "4px"
                            }} 
                            href={proj.paper}>
                                [Paper]
                            </a>
                        )}
                    </p>


                    {/* description */}
                    <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.2", textAlign: "left"}}>
                        {proj.description}
                    </p>
                </div>
              </div>
            ))}
            
            {/* show see more publications in home page */}
            {isHome && (
            <div style={{
                textAlign: "center", 
                marginTop: "10px",
                marginBottom: "20px"
            }}>
                <a 
                href="/projects" 
                style={{
                    textDecoration: "none",
                    color: "#2d7093",
                    fontSize: "14px"
                }}
                >
                See more projects →
                </a>
            </div>
            )}

            {!isHome && (
            <div style={{
                textAlign: "center", 
                marginTop: "10px",
                marginBottom: "20px"
            }}>
                <a 
                href="https://github.com/ahitagnied/" 
                style={{
                    textDecoration: "none",
                    color: "#2d7093",
                    fontSize: "14px"
                }}
                >
                See more on Github →
                </a>
            </div>
            )}
          </div>
  )
}