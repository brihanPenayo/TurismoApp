import Footer from '../partials/Footer';
import Header from '../partials/Header';
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
      id: 4,
      nombre: 'Eventos',
      descripcion: 'Registra aqui tu hotel',
      img: "https://elolivar.es/olivar-content/uploads/2021/06/salones-para-eventos.png",
    },
    {
      id: 5,
      nombre: 'Atracciones',
      descripcion: 'Registra aqui tu hotel',
      img: "https://dondeviajar.co/wp-content/uploads/2021/08/Las-5-mejores-atracciones-turisticas-de-Paraguay-1024x683.jpg",
    },
    {
      id: 6,
      nombre: 'Tiendas',
      descripcion: 'Registra aqui tu hotel',
      img: "https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg",
    },
    // Agrega más tarjetas aquí...
  ];

  return (
    <>
      <Header />
      <div className='bg-white min-h-screen'>
        <header className='flex justify-center items-center'>
          <h1 className='p-8 text-2xl font-bold text-gray-900' data-aos="fade-up" data-aos-delay="200">Registra un servicio</h1>
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
      <Footer />
    </>
  );
};

export default Presentacion;