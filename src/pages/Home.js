import profile from '../assets/profile.jpeg'
import React, { useEffect, useState } from 'react';
import Contact from "../components/Contact";
import { data } from '../contents/ContactData';
import { publist } from '../contents/PublicationList'
import { PublicationList } from '../components/PublicationList';
import { ProjectList } from '../components/ProjectList';
import { projlist } from '../contents/ProjList'
import { EssayList } from '../components/EssayList';
import PhotoGallery from "../components/PhotoGallery";
import { photos } from '../contents/Photos';

const Link = ({ href, children }) => (
  <a href={href} style={{textDecoration: 'none', color: "#0a507e"}}>
    {children}
  </a>
);

function Home() {
  useEffect(() => {
    document.title = "Home | Ahitagni D";

    return () => {};
  }, []);

  const limitedPubList = publist.slice(0, 3);
  const limitedProjList = projlist.slice(0, 4);
  const [essayFiles, setEssayFiles] = useState([]);

  useEffect(() => {
    const loadEssayFiles = async () => {
      try {
        const response = await fetch('/essays/manifest.json');
        if (response.ok) {
          const manifest = await response.json();
          setEssayFiles(manifest.files);
        }
      } catch (err) {
        console.error('Error loading essay files:', err);
      }
    };
    
    loadEssayFiles();
  }, []);

  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '10px',
    }}>
      
    <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>
        <img src={profile} style={{width: 'max(30%, 145px)', aspectRatio: '1', borderRadius: '50%', marginTop: '20px', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="Banner" />
        <p>
          I am Ahi, a junior at <Link href='https://www.rice.edu/'>Rice University</Link> studying EECS. I am interested in foundational models in Vision & Robotics.
          I am a part of <Link href='https://neo.com/'>Neo</Link>, love building start-ups, hiking, and sailing. 
        </p>


        {/* Contact and Teams Box*/}
        <Contact data={data} />

        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
        }}>
          [RESEARCH]
        </h4>

        <p>
          I research Video Understanding at <Link href='https://www.sievedata.com/'>Sieve</Link> to curate and scale high-fidelity video datasets for companies like <Link href='https://www.moonvalley.com/'>MoonValley</Link>. 
          I also research Gaussian Splatting at the <Link href='https://computationalimaging.rice.edu/'>Computational Imaging Group</Link> with <Link href='https://scholar.google.com/citations?user=tI-oUmsAAAAJ&hl=en'> Dr. Ashok Veeraraghavan</Link>. 
          
          <br/><br/>

          Previously, I have developed Colloidal Robotics at the <Link href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/'>MIT Media Lab</Link>, researched Li/Na-ion batteries at 
          the <Link href='https://ajayan.rice.edu/'>Ajayan Group</Link>, and energy devices at <Link href='https://scholar.google.com/citations?user=JlmilbMAAAAJ&hl=en'>IIT Guwahati.</Link>
        </p>

        {/* limited publication list */}
        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
        }}>
          [PUBLICATIONS]
        </h4>
        <PublicationList publist={limitedPubList} isHome={true}/>
        
        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
        }}>
          [PHOTOGRAPHY]
        </h4>
        <p>
          Like pixels of all kinds. Most pictures using a PowerShot A540, sometimes a Nikon D5600.
        </p>
        <PhotoGallery photos={photos} />

        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
        }}>
          [ESSAYS]
        </h4>
        <EssayList files={essayFiles} limit={3} isHome={true} />

        {/* limited projects list */}
        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
        }}>
          [PROJECTS]
        </h4>
        <ProjectList projlist={limitedProjList} showPage={false}/>
      </div>

    </div>
  );
}

export default Home;