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
import { Work } from '../components/Work';
import { worklist } from '../contents/WorkList';

const Link = ({ href, children }) => (
  <a href={href} style={{textDecoration: 'none', color: "#0a507e"}}>
    {children}
  </a>
);

function Home() {
  useEffect(() => {
    document.title = "Home | Ahitagni D";
  }, []);

  const limitedPubList = publist.slice(0, 3);
  const limitedProjList = projlist.slice(0, 4);
  const limitedWorkList = worklist.slice(0, 5);
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
      paddingTop: '15px',
    }}>
      
    <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>
        <p>
          hey! I am Ahi, I study EECS at <Link href='https://www.rice.edu/'>Rice</Link>. I love ML and consumer AI exploring new ways to interact with reality & imagination. I am a part of <Link href='https://neo.com/'>Neo</Link>, and scout for <Link href='https://clayvc.io'>Clay VC</Link>. If you are an early stage founder, would love to <Link href='https://calendly.com/ahitagnid/new-meeting'>connect</Link>.

          <br/><br/>

          Currently, I research Video Understanding at <Link href='https://www.sievedata.com/'>Sieve</Link> to curate video datasets for top AI labs.
        </p>

        {/* Contact and Teams Box*/}
        <Contact data={data} />

        {/* Work Experience */}
        {/* <Work worklist={limitedWorkList}/> */}

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
          I am interested in novel methods to represent and interact with reality. My interests include but are not limited to Neural Radiance Fields, World Models, & VLAs. I research Gaussian Splatting with <Link href='https://scholar.google.com/citations?user=tI-oUmsAAAAJ&hl=en'> Dr. Ashok Veeraraghavan</Link>

          <br/><br/>

          Previously, I worked on Colloidal Robotics at the <Link href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/'>MIT Media Lab</Link>, researched Li/Na-ion batteries at the <Link href='https://ajayan.rice.edu/'>Ajayan Group</Link>, and energy devices at <Link href='https://scholar.google.com/citations?user=JlmilbMAAAAJ&hl=en'>IIT Guwahati.</Link>

          <br/><br/>
        </p>
        
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