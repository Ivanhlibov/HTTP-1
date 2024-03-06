// components/Loader.js
import React from 'react';
import { Blocks } from 'react-loader-spinner'; // Змінився імпорт на { Blocks }

const Loader = () => (
  <div className="loader-container">
    <Blocks type="ThreeDots" color="#00BFFF" height={80} width={80} /> {/* Змінився імпорт */}
  </div>
);

export default Loader;
