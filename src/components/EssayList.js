import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export const EssayList = ({ files, limit, isHome = false}) => {
  const [essays, setEssays] = useState([]);
  
  const titleToSlug = useCallback((title) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }, []);

  const parseFrontmatter = useCallback((content) => {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (match) {
      const frontmatter = match[1];
      const titleMatch = frontmatter.match(/title:\s*(.+)/);
      const dateMatch = frontmatter.match(/date:\s*(.+)/);
      
      return {
        title: titleMatch ? titleMatch[1].trim() : 'Untitled',
        date: dateMatch ? dateMatch[1].trim() : 'No date',
        slug: titleMatch ? titleToSlug(titleMatch[1]) : 'untitled'
      };
    }
    return null;
  }, [titleToSlug]);

  useEffect(() => {
    const loadEssays = async () => {
      try {
        const essays = [];
        
        for (const filename of files) {
          try {
            const response = await fetch(`/essays/${filename}`);
            const content = await response.text();
            const metadata = parseFrontmatter(content);
            if (metadata) {
              essays.push(metadata);
            }
          } catch (err) {
            console.error(`Error loading ${filename}:`, err);
          }
        }
        setEssays(essays);
      } catch (err) {
        console.error('Error loading essays:', err);
        setEssays([]);
      }
    };

    loadEssays();
  }, [files, parseFrontmatter]);

  const displayEssays = limit ? essays.slice(0, limit) : essays;

  return (
    <div>
      {displayEssays.map((essay, i) => (
        <div key={essay.slug}>
          <Link to={`/essays/${essay.slug}`} style={{ 
            textDecoration: "none", 
            color: "inherit", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "10px 0", 
            transition: "background-color 0.2s ease" 
          }}>
            <h3 style={{ fontSize: "16px", margin: "0", color: "#444", fontWeight: "normal" }}>
              {essay.title}
            </h3>
            <span style={{ fontSize: "14px", color: "#666", fontStyle: "italic" }}>
              {essay.date}
            </span>
          </Link>
        </div>
      ))}
      
      {isHome && essays.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Link to="/essays" style={{ 
            textDecoration: "none", 
            color: "#2d7093", 
            fontSize: "14px",
            display: "inline-block"
          }}>
            View all essays →
          </Link>
        </div>
      )}
    </div>
  );
};
