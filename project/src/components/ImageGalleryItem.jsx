// components/ImageGalleryItem.js
import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="gallery-item" onClick={() => onClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt="" className="gallery-item-image" />
  </li>
);

export default ImageGalleryItem;
