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
    {
      id: 3,
      nombre: 'Eventos',
      descripcion: 'Registra aqui tu hotel',
      img: "https://www.emagister.com/blog/wp-content/uploads/2019/04/ch%C3%B3fer-privado.jpg",
    },
    {
      id: 3,
      nombre: 'Atracciones',
      descripcion: 'Registra aqui tu hotel',
      img: "https://www.emagister.com/blog/wp-content/uploads/2019/04/ch%C3%B3fer-privado.jpg",
    },
    {
      id: 3,
      nombre: 'Tiendas',
      descripcion: 'Registra aqui tu hotel',
      img: "https://www.emagister.com/blog/wp-content/uploads/2019/04/ch%C3%B3fer-privado.jpg",
    },
    // Agrega más tarjetas aquí...
  ];

  return (
    <div className='bg-white min-h-screen'>
      <header className='flex justify-center items-center'>
        <h1 className='p-8 text-2xl font-bold text-gray-900'>Registra un servicio</h1>
      </header>

      <div className='grid  gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10'>
        {CatalogoItem.map(item => (
          <CatalogoPresentacion
            key={item.id}
            backgroundImage={item.img}
            title={item.nombre}
          />
        ))}
      </div>
    </div>
  );
};

export default Presentacion;