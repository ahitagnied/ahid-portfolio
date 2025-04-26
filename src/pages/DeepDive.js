import React from 'react';
import { DeepDives } from '../components/DeepDives';
import deepdivecont from '../contents/DeepDiveContent';

function DeepDive() {
  return (
    <div>
        <DeepDives deepdives={deepdivecont} />
    </div>
  );
}

export default DeepDive;