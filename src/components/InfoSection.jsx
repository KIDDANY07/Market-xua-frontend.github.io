import React from 'react';

const InfoSection = ({ title, img, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={img}
        alt={title}
        className="w-full h-72 object-cover rounded-2xl mb-4" 
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default InfoSection;
