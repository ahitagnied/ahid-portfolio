import profile from '../assets/profile.jpg'
import React, { useEffect } from 'react';
import Contact from "../components/Contact";
import { data } from '../contents/ContactData';
import { publist } from '../contents/PublicationList'
import { PublicationList } from '../components/PublicationList';
import { ProjectList } from '../components/ProjectList';
import { projlist } from '../contents/ProjList'

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
          fontSize: "16px", 
          textAlign: "left", 
          color: "#111",
          fontFamily: "times new roman"
        }}>
          Research
        </h4>

        <p>
          I am an Applied Researcher at <Link href='https://www.sievedata.com/'>Sieve</Link> where I build ML filters to curate and scale high-fidelity video datasets for companies like <Link href='https://www.moonvalley.com/'>MoonValley</Link>. 
          I also research Gaussian Splatting at the <Link href='https://computationalimaging.rice.edu/'>Computational Imaging Group</Link> with <Link href='https://scholar.google.com/citations?user=tI-oUmsAAAAJ&hl=en'> Dr. Ashok Veeraraghavan</Link>. 
          
          <br/><br/>

          Previously, I have developed the world's smallest batteries (30 um) for Colloidal Robotics at the <Link href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/'>MIT Media Lab</Link>, researched Li/Na-ion batteries at 
          the <Link href='https://ajayan.rice.edu/'>Ajayan Group</Link>, and deviced a method to convert plastic waste to energy at <Link href='https://scholar.google.com/citations?user=JlmilbMAAAAJ&hl=en'>IIT Guwahati.</Link>
        </p>

        {/* limited publication list */}
        <h4 style={{ 
          fontSize: "16px", 
          textAlign: "left", 
          color: "#111",
          fontFamily: "times new roman"
        }}>
          Publications
        </h4>
        <PublicationList publist={limitedPubList} isHome={true}/>

        {/* limited projects list */}
        <h4 style={{ 
          fontSize: "16px", 
          textAlign: "left", 
          color: "#111",
          fontFamily: "times new roman"
        }}>
          Projects
        </h4>
        <ProjectList projlist={limitedProjList} isHome={true}/>
      </div>

    </div>
  );
}

export default Home;