import React from 'react';
import { ProjectList } from '../components/ProjectList';
import projlist from '../contents/ProjList';

function Publications() {
  return (
    <div>
        <ProjectList projlist={projlist} isHome={false} />
    </div>
  );
}

export default Publications;