import React from 'react';
import './ImageSlider.css'; // Assurez-vous de créer ce fichier CSS

const ImageSlider = ({ images }) => {
  return (
    <div className="overflow-hidden h-full ">
      <div className="flex animate-slide-down flex flex-col items-center ">
        {images && images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image.src} 
            alt={image.alt}
            className="w-48 h-auto mx-2 m-10"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
