import { useState } from "react"

const Cards = ({ nombre, handlechange, imgSrc }) => {
    const [select, setSelect] = useState(false)
    const handleSelect = () => {
        setSelect(true)
    }
    return (
        <div onClick={() => handlechange()} className={` ${select === true && 'border-2 border-black'} max-w-[16rem] max-h-[20rem] rounded hover:scale-105 transition-transform cursor-pointer relative shadow-lg`}>
            <div onClick={handleSelect} className={`top-0 w-auto rounded flex justify-center h-[60%] overflow-hidden`}>
                <img className="h-[100%] rounded-lg my-auto" src={imgSrc} alt="Chofer img" />
            </div>

            <div className="px-6 h-[20%] py-4">
                <div className="font-bold text-xl mb-2">{nombre}</div>
            </div>
            <div className="px-6 pt-4 h-[20%] pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Spanish</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#English</span>
            </div>
        </div>
    )
}

export default Cards