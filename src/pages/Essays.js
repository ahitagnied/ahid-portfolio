import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkFootnotes from 'remark-footnotes';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { EssayList } from '../components/EssayList';

function Essays() {
  const { slug } = useParams();
  const [essayContent, setEssayContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [manifestFiles, setManifestFiles] = useState([]);
  const [essaysList, setEssaysList] = useState([]);
  
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
    const loadManifest = async () => {
      try {
        const response = await fetch('/essays/manifest.json');
        if (response.ok) {
          const manifest = await response.json();
          setManifestFiles(manifest.files);
          
          // Also load the essays data for slug matching
          const essays = [];
          for (const filename of manifest.files) {
            try {
              const essayResponse = await fetch(`/essays/${filename}`);
              const content = await essayResponse.text();
              const metadata = parseFrontmatter(content);
              if (metadata) {
                essays.push(metadata);
              }
            } catch (err) {
              console.error(`Error loading ${filename}:`, err);
            }
          }
          setEssaysList(essays);
        } else {
          console.warn('No manifest found');
          setManifestFiles([]);
        }
      } catch (err) {
        console.error('Error loading manifest:', err);
        setManifestFiles([]);
      }
    };

    loadManifest();
  }, [parseFrontmatter]);

  const essay = slug ? essaysList.find(e => e.slug === slug) : null;

  useEffect(() => {
    document.title = essay ? `${essay.title} | Ahitagni D` : "Essays | Ahitagni D";
    
    if (essay) {
      setLoading(true);
      // Find the filename that matches this essay
      const filename = manifestFiles.find(file => {
        const metadata = parseFrontmatter(file);
        return metadata && metadata.slug === slug;
      }) || essay.title.toLowerCase().replace(/\s+/g, '-') + '.md';
      
      fetch(`/essays/${filename}`)
        .then(response => response.text())
        .then(text => {
          const content = text.replace(/^---[\s\S]*?---\n/, '');
          setEssayContent(content);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading essay:', err);
          setLoading(false);
        });
    }
  }, [essay, manifestFiles, parseFrontmatter, slug]);

  if (essay) {
    return (
      <div style={{ maxWidth: "650px", margin: "30px auto 0", padding: "0 20px", fontFamily: "Lora" }}>
        <style>
        {`
          .footnotes > h2:first-child { display: none; }
          .footnotes { font-size: 12px; }
          hr { 
            border-top: 0.5px solid #e0e0e0 !important;
          }
        `}
        </style>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "10px", 
          paddingBottom: "10px", 
          borderBottom: "1px solid #eee" 
        }}>
          <h1 style={{ 
            fontSize: "20px", 
            margin: "0", 
            color: "#444", 
            fontWeight: "normal" 
          }}>
            {essay.title}
          </h1>
          <Link to="/essays" style={{ 
            textDecoration: "none", 
            color: "#2d7093", 
            fontSize: "14px" 
          }}>
            ← Back
          </Link>
        </div>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{ lineHeight: "1.2", fontSize: "16px", color: "#333" }}>
            <ReactMarkdown 
              remarkPlugins={[remarkMath, remarkFootnotes]}
              rehypePlugins={[rehypeKatex]}
            >
              {essayContent}
            </ReactMarkdown>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "650px", margin: "30px auto 0", padding: "0px", fontFamily: "Lora" }}>
      <EssayList files={manifestFiles} limit={null} isHome={false}/>
    </div>
  );
}

export default Essays;