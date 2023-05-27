import React, { useEffect, useState } from 'react'

export const Banner = () => {
    const [isPremium, setIsPremium] = useState(false);
    useEffect(() => {

    }, [])
    return (
        <>
            {!isPremium &&
                <section className='h-24 w-full z-30 fixed bottom-4 bg-ads bg-cover bg-center'>
                    <div className='w-full h-4 z-40 bg-[rgb(255,0,0)] bottom-0 fixed grid place-items-center place-content-center text-white'><h1 className='h6'>Cansado de la publicidad? Suscríbete!</h1></div>
                </section>}
        </>
    )
}
