import denali from '../assets/denali.png'
import React, { useEffect } from 'react';
import Contact from "../components/Contact";
import {data} from '../contents/ContactData';
import {publist} from '../contents/PublicationList'
import { PublicationList } from '../components/PublicationList';

function Home() {
  useEffect(() => {
    document.title = "Home | Ahitagni D";

    return () => {};
  }, []);

  const limitedPubList = publist.slice(0, 3);

  return (
    <div style={{
      maxWidth: '650px',
      margin: '0 auto',
      padding: '10px',
    }}>
      
    <div style={{ lineHeight: '1.2', fontSize: '16px', fontFamily: 'Lora' }}>
        <img src={denali} style={{width: '100%', borderRadius: '20px', marginTop: '20px'}} alt="Banner" />
        <p>
          Hello! I am Ahitagni (or Ahi), I am an undergrad at Rice University pursuing a dual degree in EE and CS. 
          I like AI, software, and startups. Enjoy taking pictures and hiking. 
        </p>


        {/* Contact and Teams Box*/}
        <Contact data={data} />


        <h4>Research</h4>
        <p>
          I am interested in CV and Spatial Intelligence. I research diffusion models and contro-nets at the <a style={{textDecoration: 'none', color: "#0a507e"}} 
          href='https://computationalimaging.rice.edu/'>Computational Imaging Group</a> with <a style={{textDecoration: 'none', color: "#0a507e"}} 
          href='https://computationalimaging.rice.edu/team/ashok-veeraraghavan/'> Dr. Ashok Veeraraghavan</a>. Also exploring TTS and voice models for fun. 
          <br/> <br/>

          Previously, I have developed the <strong>world's smallest batteries</strong> (30 um) at the <a style={{textDecoration: 'none', color: "#0a507e"}} 
          href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/'>MIT Media Lab</a>, researched novel Li/Na-ion batteries at 
          the <a style={{textDecoration: 'none', color: "#0a507e"}} href='https://ajayan.rice.edu/'>Ajayan Group</a>, and deviced a way to convert 
          plastic waste to electrical energy at <a style={{textDecoration: 'none', color: "#0a507e"}} href='https://iitg.irins.org/profile/128220'>IIT Guwahati.</a>
        </p>

        {/* limited publication list */}
        <h4>Publications</h4>
        <PublicationList publist={limitedPubList} isHome={true}/>
      </div>

    </div>
  );
}

export default Home;