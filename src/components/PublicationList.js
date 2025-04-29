import React, { useEffect } from "react";

export function PublicationList({ publist, isHome }) {
    useEffect(() => {
      document.title = "Publications | Ahitagni D";
  
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

            {publist.map((pubs, item) => (
              
              <div key={pubs.title} style={{ 
                marginBottom: "10px", 
                display: "flex",
                gap: "20px",
                alignItems: "flex-start"
              }}>

                {/* cover image */}
                <img 
                  src={pubs.coverImage} 
                  alt={pubs.title}
                  style={{
                    marginTop: "5px",
                    width: "100px",
                    objectFit: "cover",
                  }}
                />

                <div>
                    {/* paper title */}
                    <h4 style={{ fontSize: "16px", marginBottom: "4px", marginTop: "0px", textAlign: "left"}}>
                        <a style={{
                            textDecoration: "none", 
                            color: "#2d7093"}} 
                            href={pubs.paper}>
                                {pubs.title}
                        </a>
                    </h4>
                    
                    {/* paper github and link */}
                    <p style={{ color: "#666", fontSize: "14px", margin: "0px", textAlign: "left" }}>
                        {pubs.github && (
                            <a style={{
                                textDecoration: "none",
                                color: "#2d7093",
                                marginRight: "4px"
                            }} 
                            href={pubs.github}>
                                [Code]
                            </a>
                        )}
                        {pubs.paper && (
                            <a style={{
                                textDecoration: "none",
                                color: "#2d7093",
                                marginRight: "4px"
                            }} 
                            href={pubs.paper}>
                                [Paper]
                            </a>
                        )}
                    </p>

                    {/* journal */}
                    <p style={{ color: "#666", fontSize: "14px", margin: "2px", textAlign: "left", fontStyle: "italic" }}>
                        {pubs.journal}
                    </p>

                    {/* authors */}
                    <p style={{ color: "#666", fontSize: "14px", margin: "0px", textAlign: "left" }}>
                        {pubs.authors}
                    </p>

                    {/* description */}
                    <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.2", textAlign: "left"}}>
                        {pubs.description}
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