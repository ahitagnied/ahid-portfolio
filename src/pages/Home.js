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

const Link = ({ href, children, color = "#0a507e", underline = true }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const showUnderline = underline || isHovered;
  
  return (
    <a 
      href={href} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textDecoration: 'none', 
        color: 'inherit',
        position: 'relative',
        display: 'inline-block'
      }}
    >
      {children}
      {showUnderline && (
        <div style={{
          position: 'absolute',
          bottom: '1px',
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(to right, ${color}, ${color}aa)`
        }} />
      )}
    </a>
  );
};

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
      paddingTop: '30px',
    }}>
      
    <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>
      
      {/* Three row grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4px 20px',
        marginBottom: '20px',
        paddingBottom: '20px',
        alignItems: 'center'
      }}>
        {/* Row 1 */}
        <div style={{ 
          fontSize: '13px', 
          color: '#000',
          fontWeight: 'bold'
        }}>
          [AHITAGNI D]
        </div>
        <div style={{ textAlign: 'right', fontSize: '14px' }}>
          <Link href='https://www.linkedin.com/in/ahitagnid/' color='#0077b5' underline={true}>LinkedIn</Link>
        </div>
        
        {/* Row 2 */}
        <div style={{
          fontSize: '16px',
          color: '#666'
        }}>
          Vision & Robotics Engineer
        </div>
        <div style={{ textAlign: 'right', fontSize: '14px' }}>
          <Link href='https://x.com/ahitagnied' color='#1da1f2' underline={true}>Twitter</Link>
        </div>
        
        {/* Row 3 */}
        <div style={{
          fontSize: '16px',
          color: '#666'
        }}>
          EECS at <Link href='https://www.rice.edu/' color='#003087' underline={false}>Rice</Link>
        </div>
        <div style={{ textAlign: 'right', fontSize: '14px' }}>
          <Link href='https://github.com/ahitagnied' color='#24292e' underline={true}>GitHub</Link>
        </div>
      </div>
      
      
        <p>
          I love ML and consumer AI exploring new ways to interact with reality & imagination. I am a part of <Link href='https://neo.com/' color='#6366f1'>Neo</Link>, and scout for <Link href='https://clayvc.io' color='#dc2626'>Clay VC</Link>. If you are an early stage founder, would love to <Link href='https://calendly.com/ahitagnid/new-meeting' underline={false}>connect</Link>.

          <br/><br/>

          I am a research engineer working on Continual Learning at <Link href='https://personainc.ai/' color='#00BFFF'>Persona AI</Link>. Previously, I worked on Video Understanding at <Link href='https://www.sievedata.com/' color='#7c3aed'>Sieve</Link> to curate video datasets for top AI labs.
        </p>

        {/* Contact and Teams Box*/}
        {/* <Contact data={data} /> */}

        {/* Work Experience */}
        <Work worklist={limitedWorkList}/>

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
          I am interested in novel methods to represent and interact with reality. My interests include but are not limited to Neural Radiance Fields, World Models, & VLAs. I research Gaussian Splatting with <Link href='https://scholar.google.com/citations?user=tI-oUmsAAAAJ&hl=en' underline={false}> Dr. Ashok Veeraraghavan</Link>

          <br/><br/>

          Previously, I worked on Colloidal Robotics at the <Link href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/' color='#8a0000'>MIT Media Lab</Link>, researched Li/Na-ion batteries at the <Link href='https://ajayan.rice.edu/' underline={false}>Ajayan Group</Link>, and energy devices at <Link href='https://scholar.google.com/citations?user=JlmilbMAAAAJ&hl=en' color='#ff6b35'>IIT Guwahati.</Link>

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