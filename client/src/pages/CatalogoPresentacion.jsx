import React from 'react';
import { NavLink } from 'react-router-dom';

const CatalogoPresentacion = ({ backgroundImage, title, action }) => {
  const cartStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',


  };

  return (
    
    <NavLink to="/form-chofer" className='hover:scale-105'>
      <div className="relative h-48 mr-3 rounded-md shadow-lg" style={cartStyle} >
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-md">
          <h3 className="text-xl font-bold">{title}</h3>
          {/* Aquí puedes agregar otros elementos o información */}
        </div>
      </div>
    </NavLink>
  );
};

export default CatalogoPresentacion;