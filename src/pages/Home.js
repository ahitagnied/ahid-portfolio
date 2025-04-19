import React from 'react';
import banner from '../assets/banner.jpg'

function Home() {
  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '10px',
    }}>
      
      <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>
        <img src={banner} style={{width: '100%', borderRadius: '20px', marginTop: '20px'}} alt="Banner" />
        <p>
          Hello! I am Ahitagni (or Ahi), I am an undergrad at Rice University pursuing a dual degree in EE and CS. 
          I am a researcher at the <a style={{textDecoration: 'none'}} href='https://computationalimaging.rice.edu/'>
          Computational Imaging Group</a> working on diffusion models & control-nets for applicatiosn in video stabalisation.

          <br/> <br/>

          I am interested in AI, primarily CV and voice models. I like [writing, software, startups]. Enjoy watching 
          movies and hiking. 
        </p>
        
        <h4>Research</h4>
        <p>
          I am interested in CV and Spatial Intelligence, and I am advised by <a style={{textDecoration: 'none'}} 
          href='https://computationalimaging.rice.edu/team/ashok-veeraraghavan/'>Dr. Ashok Veeraraghavan</a>. Also exploring 
          TTS and voice models for fun. 

          <br/> <br/>

          Previously, I have developed the <strong>world's smallest batteries</strong> (30 um) at the <a style={{textDecoration: 'none'}} 
          href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/'>MIT Media Lab</a>, researched novel Li/Na-ion batteries at 
          the <a style={{textDecoration: 'none'}} href='https://ajayan.rice.edu/'>Ajayan Group</a>, and deviced a way to convert 
          plastic waste to electrical energy at <a style={{textDecoration: 'none'}} href='https://iitg.irins.org/profile/128220'>IIT Guwahati.</a>
        </p>
      </div>
    </div>
  );
}

export default Home;