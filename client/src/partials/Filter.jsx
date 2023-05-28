import { useState, useEffect } from 'react'
import Options from './Options';
import Cards from './Cards';
import Header from './Header';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
    const navigate = useNavigate()
    const handleAlert = () => {
        Swal.fire({
            title: 'Pago correcto',
            text: "Disfrute su estadia!",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/")
            }
        })

    }
    const [jsonData, setJsonData] = useState(null);
    const [counter, setCounter] = useState(0);
    const [ciudad, setCiudad] = useState('');

    const handlechange = (e) => {
        setCounter(counter + 1)
        setCiudad(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = await JSON.parse(localStorage.getItem('dataPerson'));
                setJsonData(storedData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    console.log(jsonData)

    return (
        <>
            <Header />
            {
                counter >= 0 && <div className='flex w-[50%] mx-auto p-4 my-8' data-aos='fade-up' data-aos-delay='200'>
                    <select className='w-full h-full rounded' onChange={handlechange} name="ciudades" id="ciudades">
                        <option value="">Selecciona la Ciudad</option>
                        <option value="CDE">Ciudad del Este</option>
                        <option value="Encar">Encar</option>
                        <option value="Asuncion">Asuncion</option>
                    </select>
                </div>
            }
            {
                counter >= 1 && <div className='flex w-[80%] mx-auto my-10 justify-center gap-4' data-aos='fade-up' data-aos-delay='200'>
                    <Cards imgSrc={'/chofer/chf1.jpg'} nombre={"Katya Rodriguez"} handlechange={handlechange} />
                    <Cards imgSrc={'/chofer/chf2.jpg'} nombre={"Ana Martinez"} handlechange={handlechange} />
                    <Cards imgSrc={'/chofer/chf3.jpg'} nombre={"Marcus Vazquez"} handlechange={handlechange} />
                </div>
            }
            {
                counter >= 2 && <div className='flex w-[80%] mx-auto my-10 justify-center gap-4' data-aos='fade-up' data-aos-delay='200'>
                    <Cards imgSrc={'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1'} nombre={"Hotel Maria"} handlechange={handlechange} />
                    <Cards imgSrc={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TCUnNp36Nn_iZ7k-5D_hMT0YQ_DHGcZcGLfmVJ9HbOcrgi3pJv6bg1x8Cyv8mUIMyLc&usqp=CAU'} nombre={"Hotel Indep"} handlechange={handlechange} />
                    <Cards imgSrc={'https://media-cdn.tripadvisor.com/media/photo-s/29/10/70/c9/hotel-exterior.jpg'} nombre={"Hotel Estrella"} handlechange={handlechange} />
                </div>
            }
            {
                counter >= 3 && <div className='flex w-[80%] mx-auto my-10 justify-center gap-4' data-aos='fade-up' data-aos-delay='200'>
                    <Cards imgSrc={'https://radioconcierto.com.py/wp-content/uploads/2021/06/lago-de.jpg'} nombre={"El Lago"} handlechange={handlechange} />
                    <Cards imgSrc={'https://upload.wikimedia.org/wikipedia/commons/a/a6/Saltos_del_Monday111.JPG'} nombre={"Saltos Monday"} handlechange={handlechange} />
                    <Cards imgSrc={'data:image/jpeg;base64,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'} nombre={"Catedral San Blás"} handlechange={handlechange} />

                </div>

            }
            {counter >= 4 && <div className='w-[50%] max-h-24 mx-auto flex justify-between p-8 place-items-center'>
                <h1 className='h4'>Total a pagar: 350.000Gs.</h1>
                <button onClick={handleAlert} className='btn bg-aml'>Pagar</button>
            </div>}
        </>
    )
}

export default Filter