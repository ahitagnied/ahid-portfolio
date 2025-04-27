import React from 'react';
import { PublicationList } from '../components/PublicationList';
import publist from '../contents/PublicationList';

function Publications() {
  return (
    <div>
        <PublicationList publist={publist} isHome={false} />
    </div>
  );
}

export default Publications;