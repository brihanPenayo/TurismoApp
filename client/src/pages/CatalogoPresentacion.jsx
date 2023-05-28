import React from 'react';
import { NavLink } from 'react-router-dom';

const CatalogoPresentacion = ({ backgroundImage, title }) => {
  const cartStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',


  };

  return (

<<<<<<< HEAD
    <NavLink to="/asistente" data-aos='fade-up' data-aos-delay='400  '>
      <div className="relative transition-transform hover:scale-105 h-48 mr-3 rounded-md shadow-lg" style={cartStyle} >
=======
    <NavLink to="/itinerario-buses" data-aos="fade-up" data-aos-delay="400">
      <div className="relative h-48 mr-3 hover:scale-105 transition-transform rounded-md shadow-lg" style={cartStyle} >
>>>>>>> 9dea2082eed2a87d9bbedd3d17c2d74fd6d6fd44
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-md">
          <h3 className="text-xl font-bold">{title}</h3>
          {/* Aquí puedes agregar otros elementos o información */}
        </div>
      </div>
    </NavLink>
  );
};

export default CatalogoPresentacion;