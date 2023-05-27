import React from 'react';

const TarjetaPresentacio = ({ tarjetas }) => {
  return (
    <div>
      {tarjetas.map((tarjeta) => (
        <div key={tarjeta.id} className="flex flex-col justify-center items-center bg-black w-56 p-3 h-24 text-white">
          <h2>{tarjeta.nombre}</h2>
          <p>{tarjeta.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default TarjetaPresentacio;
