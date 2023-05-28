import { useState, useEffect } from 'react'
import Options from './Options';
import Cards from './Cards';

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
            {
                counter >= 1 && <Cards nombre={jsonData.data[0][ciudad][0].choferes[0].nombre} />
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