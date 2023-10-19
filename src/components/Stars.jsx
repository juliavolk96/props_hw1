import React from 'react';
import Star from './Star';

function Stars({ count }) {
  if (isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  const starElements = [];

  for (let i = 0; i < count; i++) {
    starElements.push(<Star key={i} />)
  }
  
  return (
    <ul className='card-body-stars u-clearfix'>
      {starElements}
    </ul>
  );
}

export default Stars;
