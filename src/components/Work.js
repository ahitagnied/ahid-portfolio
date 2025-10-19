import React from "react";

export function Work({ worklist }) {
    return (
        <div style={{
            marginTop: "10px",
            fontFamily: "Lora",
          }}>

            {worklist.map((work, item) => (
              <div key={work.name}>
                <a 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block"
                  }}
                >
                  <div style={{ 
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "3px",
                    padding: "3px 3px"
                  }}>

                    {/* Logo */}
                    <div style={{ 
                        width: "24px",
                        height: "24px",
                        marginRight: "10px",
                        flexShrink: 0
                    }}>
                        <img 
                            src={work.logo} 
                            alt={`${work.name} logo`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "4px"
                            }}
                        />
                    </div>

                    {/* Company name */}
                    <div style={{
                        color: "#111",
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "1.2",
                        marginRight: "12px",
                        flexShrink: 0
                    }}>
                        {work.name}
                    </div>

                    {/* Position */}
                    <div style={{
                        color: "#666",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "1.2",
                        flex: "1"
                    }}>
                        {work.position}
                    </div>

                    {/* Year */}
                    <div style={{ 
                        color: "#999", 
                        fontSize: "14px", 
                        textAlign: "right",
                        lineHeight: "1.2",
                        flexShrink: 0
                    }}>
                        {work.year}
                    </div>

                  </div>
                </a>

                {item < worklist.length - 1 && (
                  <div style={{
                    borderBottom: "1px dotted #ccc",
                    marginBottom: "5px"
                  }}></div>
                )}
              </div>
            ))}

          </div>
  )
}
