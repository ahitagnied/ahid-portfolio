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
          Junior at <Link href='https://www.rice.edu/'>Rice</Link> studying EECS. I am interested in foundational models in Vision and explore consumer AI using vision and audio.
          I am a part of <Link href='https://neo.com/'>Neo</Link>, and scout for <Link href='https://clayvc.io'>Clay VC</Link> [<Link href='https://calendly.com/ahitagnid/new-meeting'>connect</Link>]. 
        </p>


        {/* Contact and Teams Box*/}
        <Contact data={data} />

        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}>
          [RESEARCH]
        </h4>

        <p>
          I am interested in using vision to represent and interact with reality. My interests include but are not limited to 3D Neural Representations, World Models, & VLAs.

          <br/><br/>

          Currently, I research Video Understanding at <Link href='https://www.sievedata.com/'>Sieve</Link> to curate video datasets for top AI labs and explore Gaussian Splatting at the <Link href='https://computationalimaging.rice.edu/'>Computational Imaging Group</Link> with <Link href='https://scholar.google.com/citations?user=tI-oUmsAAAAJ&hl=en'> Dr. Ashok Veeraraghavan</Link>

          <br/><br/>

          Previously, I worked on Colloidal Robotics at the <Link href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/'>MIT Media Lab</Link>, researched Li/Na-ion batteries at the <Link href='https://ajayan.rice.edu/'>Ajayan Group</Link>, and energy devices at <Link href='https://scholar.google.com/citations?user=JlmilbMAAAAJ&hl=en'>IIT Guwahati.</Link>
        </p>

        {/* limited publication list */}
        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}>
          [PUBLICATIONS]
        </h4>
        <PublicationList publist={limitedPubList} isHome={true}/>
        
        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
          paddingTop: "10px",
          paddingBottom: "10px"
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
          paddingTop: "10px",
          paddingBottom: "10px"
        }}>
          [ESSAYS]
        </h4>
        <EssayList files={essayFiles} limit={3} isHome={true} />

        {/* limited projects list */}
        <h4 style={{ 
          fontSize: "12px", 
          textAlign: "left", 
          color: "#111",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}>
          [PROJECTS]
        </h4>
        <ProjectList projlist={limitedProjList} showPage={false}/>
      </div>

    </div>
  );
}

export default Home;