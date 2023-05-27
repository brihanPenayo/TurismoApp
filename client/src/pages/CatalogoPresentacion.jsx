import React from 'react';

const CatalogoPresentacion = ({ backgroundImage, title, action }) => {
  const cartStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',


  };

  return (
    <button className='hover:scale-105' onClick={action}>
      <div className="relative h-48 mr-3 rounded-md shadow-lg" style={cartStyle} >
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-md">
          <h3 className="text-xl font-bold">{title}</h3>
          {/* Aquí puedes agregar otros elementos o información */}
        </div>
      </div>
    </button>
  );
};

export default CatalogoPresentacion;