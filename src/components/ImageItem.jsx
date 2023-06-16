
import React from 'react';
 



export default function ImageItem({ image }) {
  

  return (
    <li className='image-item'>
      <a href ='#'>
        <figure className='image'>
          <img src={image.url} alt={image.alt} />

        </figure>
      </a>
    </li>
    
   
    );
}

