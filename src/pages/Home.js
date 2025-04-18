// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'times new roman'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Hello, I'm Ahi
      </h1>
      
      <div style={{ lineHeight: '1.6', fontSize: '18px' }}>
        <p>
          Welcome to my personal website. This is where I share my thoughts, projects, 
          and interests. Feel free to explore the different sections.
        </p>
        
        <p>
          You can find my reading list in the Reading section, my articles and 
          essays in the Writing section, and some deeper explorations in the Deep Dives section.
        </p>
      </div>
    </div>
  );
}

export default Home;