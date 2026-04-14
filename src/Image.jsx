import React from 'react';
import image1 from './assets/images/off.jpg';
import image2 from './assets/images/on.png';
import { useState } from 'react';



const Image = () => {
    let [image, setImage] = useState(image1)
  let handleImage = () => {
    if (image === image1) {
      setImage(image2)
    } else {
      setImage(image1)
    }
  }
    return (
        <div>
            <img width={'300px'} height={'300px'} src={image} alt={image} />
        <br />
        <button onClick={handleImage}>click Here</button>
        </div>
    );
};

export default Image;