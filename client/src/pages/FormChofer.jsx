import { useState } from 'react';
import Swal from "sweetalert2";
import Header from '../partials/Header'
import Footer from '../partials/Footer'

const Registro = () => {

	let local = {
		data: [{
			CDE: [{
				hoteles: [{
					nombre: "Hotel A",
					descripcion: "Descripción del Hotel A",
					img: "ruta/imagen-hotel-a.jpg"
				}],
				choferes: [{
					imagen: "ruta/imagen-chofer-1.jpg",
					nombre: "Chofer 1",
					precio: 50,
					licencia: "123456789",
					modeloAuto: "Auto 1",
					horario: "9:00 AM - 5:00 PM",
					color: "Rojo",
					telefono: "123456789",
					ciudad: "CDE"
				}],
				guias: [{
					nombre: "Guía 1",
					imagen: "ruta/imagen-guia-1.jpg"
				}],
				restaurantes: [{
					nombre: "Restaurante 1",
					img: "ruta/imagen-restaurante-1.jpg"
				}],
				compras: [{
					nombre: "Tienda 1",
					img: "ruta/imagen-tienda-1.jpg"
				}]
			}],
			Encar: [{
				hoteles: [{
					nombre: "Hotel B",
					descripcion: "Descripción del Hotel B",
					img: "ruta/imagen-hotel-b.jpg"
				}],
				choferes: [{
					imagen: "ruta/imagen-chofer-2.jpg",
					nombre: "Chofer 2",
					precio: 60,
					licencia: "987654321",
					modeloAuto: "Auto 2",
					horario: "8:00 AM - 4:00 PM",
					color: "Azul",
					telefono: "987654321",
					ciudad: "Encarnación"
				}],
				guias: [{
					nombre: "Guía 2",
					imagen: "ruta/imagen-guia-2.jpg"
				}],
				restaurantes: [{
					nombre: "Restaurante 2",
					img: "ruta/imagen-restaurante-2.jpg"
				}],
				compras: [{
					nombre: "Tienda 2",
					img: "ruta/imagen-tienda-2.jpg"
				}]
			}],
			Asuncion: [{
				hoteles: [{
					nombre: "Hotel C",
					descripcion: "Descripción del Hotel C",
					img: "ruta/imagen-hotel-c.jpg"
				}],
				choferes: [{
					imagen: "ruta/imagen-chofer-3.jpg",
					nombre: "Chofer 3",
					precio: 70,
					licencia: "567891234",
					modeloAuto: "Auto 3",
					horario: "10:00 AM - 6:00 PM",
					color: "Verde",
					telefono: "567891234",
					ciudad: "Asunción"
				}],
				guias: [{
					nombre: "Guía 3",
					imagen: "ruta/imagen-guia-3.jpg"
				}],
				restaurantes: [{
					nombre: "Restaurante 3",
					img: "ruta/imagen-restaurante-3.jpg"
				}],
				compras: [{
					nombre: "Tienda 3",
					img: "ruta/imagen-tienda-3.jpg"
				}]
			}]
		}]
	};

	const [dataPerson, setDataPerson] = useState({
		name: '',
		lastname: '',
		email: '',
		documento: '',
		phone: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setDataPerson((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			localStorage.setItem('dataPerson', JSON.stringify(dataPerson));
			Swal.fire({
				icon: 'success',
				title: '¡Datos registrados!',
				text: 'Los datos se han guardado correctamente.',
			});
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Datos no registrados! vuelve a intentarlo :(',
			})
		}
	};

	return (
		<>
			<Header />
			<div className='flex justify-center'>
				<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-72 ">
					<div className="mb-4">
						<label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre y Apellido:</label>
						<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" value={dataPerson.name} onChange={handleChange} required />
					</div>
					<div className="mb-4">
						<label htmlFor="documento" className="block text-gray-700 font-bold mb-2">Número de Licencia:</label>
						<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="documento" name="documento" value={dataPerson.documento} onChange={handleChange} required />
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="block text-gray-700 font-bold mb-2">Datos del automóvil:</label>
						<input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" value={dataPerson.email} onChange={handleChange} required />
					</div>
					<div className="mb-4">
						<label htmlFor="documento" className="block text-gray-700 font-bold mb-2">Tarifa Base:</label>
						<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="documento" name="documento" value={dataPerson.documento} onChange={handleChange} required />
					</div>
					<div className="mb-4">
						<label htmlFor="documento" className="block text-gray-700 font-bold mb-2">Horario Disponible:</label>
						<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="documento" name="documento" value={dataPerson.documento} onChange={handleChange} required />
					</div>
					<div className="mb-4">
						<label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Teléfono:</label>
						<input type="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" value={dataPerson.phone} onChange={handleChange} />
					</div>
					<button type="submit" className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:shadow-outline">Registrar</button>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Registro;
