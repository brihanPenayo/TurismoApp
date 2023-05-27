import React from 'react';

const CatalogoPresentacion = ({ backgroundImage, title }) => {
  const cartStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="relative w-64 h-48 mr-3" style={cartStyle}>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        {/* Aquí puedes agregar otros elementos o información */}
      </div>
    </div>
  );
};

export default CatalogoPresentacion;
