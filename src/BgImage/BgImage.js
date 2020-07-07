import React, { useState, useEffect } from 'react';
import img1 from './face.jpg';
import img2 from './lights.jpg';
import img3 from './plant-head.jpg';

function BgImage() {

    const [bgImage, setBgImage] = useState(null);
    
    useEffect(() =>{
        const imgArray = [img1, img2, img3];
        setBgImage(imgArray[Math.floor(Math.random() * imgArray.length)]);
    }, [])

    return(
        <div className="col d-flex justify-content-center bg-img" style={{backgroundImage: `url(${bgImage})` }}>
        </div>
    )

}

export default BgImage;