
import React from 'react';

const ItinerarioBuses = () => {
  const busStops = [
    { linea: 4, salida: "Terminal de Ciudad del Este", destino: "Km 11", hora: "6:00 AM" },
    { linea: 7, salida: "Terminal de Ciudad del Este", destino: "Centro", hora: "7:30 AM" },
    { linea: 12, salida: "Terminal de Ciudad del Este", destino: "Barrio San Blas", hora: "8:45 AM" },
    { linea: 16, salida: "Terminal de Ciudad del Este", destino: "Minga Guazú", hora: "9:15 AM" },
    { linea: 23, salida: "Terminal de Ciudad del Este", destino: "Santa Rosa", hora: "10:00 AM" },
    { linea: 31, salida: "Terminal de Ciudad del Este", destino: "Jardín del Este", hora: "11:30 AM" },
    { linea: 42, salida: "Terminal de Ciudad del Este", destino: "Itaipú", hora: "1:15 PM" },
    { linea: 55, salida: "Terminal de Ciudad del Este", destino: "Jardín América", hora: "3:00 PM" },
    { linea: 62, salida: "Terminal de Ciudad del Este", destino: "Mbaracayú", hora: "4:45 PM" },
    { linea: 71, salida: "Terminal de Ciudad del Este", destino: "San Alberto", hora: "6:30 PM" },
    // Agrega más paradas según sea necesario
  ];

  return (
    <div><section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Itinerario de Buses</h1>
          <p>Transporte Publico horario regular Lunes a Viernes</p>
          <img src="https://www.green4t.com/wp-content/uploads/2023/03/capa-inside-transporte-publico-draft1-13-mar-23.jpg" alt="Bus" />   </div>
        <div class="lg:w-2/3 w-full mx-auto overflow-auto">
          <table class="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Linea</th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Salida</th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Destino</th>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Hora</th>
                <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              <tr> <td> 4 </td> <td> Terminal de Ciudad del Este</td> <td> Km 11</td> <td> 6:00 AM</td> </tr><tr> <td> 7</td> <td> Terminal de Ciudad del Este</td> <td> Centro</td> <td> 7:30 AM</td> </tr><tr> <td> 12</td> <td> Terminal de Ciudad del Este</td> <td> Barrio San Blas</td> <td> 8:45 AM</td> </tr><tr> <td> 16</td> <td> Terminal de Ciudad del Este</td> <td> Minga Guazú</td> <td> 9:15 AM</td> </tr><tr> <td> 23</td> <td> Terminal de Ciudad del Este</td> <td> Santa Rosa</td> <td> 10:00 AM</td> </tr><tr> <td> 31</td> <td> Terminal de Ciudad del Este</td> <td> Jardín del Este</td> <td> 11:30 AM</td> </tr><tr> <td> 42</td> <td> Terminal de Ciudad del Este</td> <td> Itaipú</td> <td> 1:15 PM</td> </tr><tr> <td> 55</td> <td> Terminal de Ciudad del Este</td> <td> Jardín América</td> <td> 3:00 PM</td> </tr><tr> <td> 62</td> <td> Terminal de Ciudad del Este</td> <td> Mbaracayú</td> <td> 4:45 PM</td> </tr><tr> <td> 71</td> <td> Terminal de Ciudad del Este</td> <td> San Alberto</td> <td> 6:30 PM</td> </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </div>
  );
};



export default ItinerarioBuses;
