import { useState, useEffect } from 'react'
import Options from './Options';

const Filter = () => {

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

    return (
        <>
            {console.log()}
            {
                counter >= 0 && <div>
                    <select onChange={handlechange} name="ciudades" id="ciudades">
                        <option value="">Seleccionar</option>
                        <option value="CDE">Ciudad del Este</option>
                        <option value="Encar">Encar</option>
                        <option value="Asuncion">Asuncion</option>
                    </select>
                </div>
            }
            <h3>{jsonData.data[0][ciudad][0].choferes[0].nombre}</h3>
            {
                counter >= 1 && <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="#" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            }
            {
                counter >= 2 && <div>
                    <h1 onClick={() => setCounter(counter + 1)}>Guias</h1>
                    <h3>{jsonData.data[0][ciudad][0].guias[0].nombre}</h3>
                </div>
            }
            {
                counter >= 3 && <div>
                    <h1 onClick={() => setCounter(counter + 1)}>Hoteles</h1>
                    <Options nombre={jsonData.data[0][ciudad][0].hoteles[0].nombre} src={jsonData.data[0][ciudad][0].hoteles[0].imagen} />
                </div>
            }
        </>
    )
}

export default Filter