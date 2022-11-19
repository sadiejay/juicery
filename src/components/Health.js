import React from 'react';
import { Link } from 'react-router-dom';

/*
This component is rendered in Main.js -- a list of these components make up the home page
  - when a user clicks on one of these components, they're routed to a list of the juice recipes associated with this health area
*/
function Health(props) {

  return (
    <div className='health-area-card'>
      <img
        src={props.imageSource}
        className='App-logo'
        alt={props.healthArea + ' photo'}
      />
      <p>{props.healthArea}</p>
    </div>
  );
}

export default Health;
