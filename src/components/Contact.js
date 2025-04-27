import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Contact({data}) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1px 1fr",
      rowGap: "0px",
      columnGap: "10px",
      maxWidth: "75%",
      margin: "0 auto",
      paddingTop: "10px",
      fontFamily: "Lora",
      fontSize: 12,
      color: "#333",
      borderTop: "1px solid #e7e7e7"
    }}>
        {/* ── left column ── */}
        <div>
            <header style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 2
            }}>
            <h5 style={{ margin: 0 }}>[CONTACT]</h5>
            <span style={{ marginLeft: "auto" }}>[2]</span>
            </header>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.contacts.map((c, i) => (
                <li
                key={c.name}
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                }}
                >
                    <sup style={{
                        verticalAlign: "super",
                        fontSize: "0.75em",
                        marginRight: 2
                    }}>
                        {i + 1}
                    </sup>
                <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    {c.name}
                    <FaExternalLinkAlt style={{ marginLeft: 6 }} size={8} />
                </a>
                </li>
            ))}
            </ul>
        </div>
        
        {/* ── center separator ── */}
        <div style={{
            width:"1px",
            height:"50%",
            backgroundColor:"#e7e7e7",
            justifySelf:"center",
            alignSelf:"center"
        }}/>

        {/* ── right column ── */}
        <div>
            <header style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 2
            }}>
            <h5 style={{ margin: 0 }}>[TEAMS]</h5>
            <span style={{ marginLeft: "auto" }}>[3]</span>
            </header>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.teams.map((t, i) => (
                <li
                key={t.name}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2,
                }}
                >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{
                    display: "inline-block",
                    width: 5,
                    height: 5,
                    backgroundColor: t.color,
                    marginRight: 8,
                    }} />
                    {t.name}
                </div>
                <div>{t.period}</div>
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
}
