import React from 'react';
import TarjetaPresentacio from './TarjetaPresentacio';
import CatalogoPresentacion from './CatalogoPresentacion';

const Presentacion = () => {
  const CatalogoItem = [
    {
      id: 1,
      nombre: 'Hoteles',
      descripcion: 'Registra aqui tu hotel',
      img: "https://ac-r.static.booking.cn/images/hotel/max1280x900/597/59733363.jpg",
    },
    {
      id: 2,
      nombre: 'Restaurante',
      descripcion: 'Registra aqui tu hotel',
      img: "https://s3.amazonaws.com/static.om.anigamy.net/static.selecciones.com.ar/App/Article/12-consejos-para-saber-que-pedir-en-un-restaurante-2636-mainImage-0.jpg",
    },
    {
      id: 3,
      nombre: 'Choferes',
      descripcion: 'Registra aqui tu hotel',
      img: "https://www.emagister.com/blog/wp-content/uploads/2019/04/ch%C3%B3fer-privado.jpg",
    },
    // Agrega más tarjetas aquí...
  ];

  return (
    <div>
      <h1>Registra un servicio</h1>
      <div className='flex w-full justify-center'>
        {CatalogoItem.map(item => (
          <CatalogoPresentacion
            backgroundImage={item.img}
            title={item.nombre}
          />)
        )}
      </div>

    </div>
  );
};

export default Presentacion;
