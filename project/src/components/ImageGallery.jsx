// components/ImageGallery.js
import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="gallery">
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
    ))}
  </ul>
);

export default ImageGallery;
