import React, { useEffect, useState } from 'react'

export const Banner = () => {
    const [isPremium, setIsPremium] = useState(false);
    const handleRemove = () => {
        setIsPremium(true);
    }
    useEffect(() => {
    }, [isPremium])

    return (
        <>
            {!isPremium &&
                <section className='h-24 w-full z-30 fixed bottom-6 bg-ads bg-cover bg-center'>
                    <div className='w-full h-6 z-40 bg-blk bottom-0 fixed grid place-items-center place-content-center text-white'><h1 className='h6'>Cansado de la publicidad? <a className='cursor-pointer' onClick={handleRemove}>Suscríbete!</a></h1></div>
                </section>}
        </>
    )
}
