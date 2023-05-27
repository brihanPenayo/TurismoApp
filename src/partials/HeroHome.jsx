import React, { useState, useRef, useEffect } from 'react';
// import Modal from '../utils/Modal';
import TextLoop from './TextLoop';
import { Swipers } from './Swipers';


function HeroHome() {

  return (
    <section>
      <div className="w-[100vw] bg-cover bg-center mx-auto px-4 sm:px-6 relative bg-hero">
        <div className='w-[100vw] bg-white absolute top-0 bg-center left-0 h-[100%] bg-opacity-50'></div>
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Turismo App
            </h1>
            <h2 className='mb-4 h2'>encontrá</h2>
            <TextLoop data={["Hoteles", "Guias", "Choferes", "Lugares", "Restaurantes"]} interval={4000} />
          </div>
          <div className="max-w-xs mx-auto mb-8 hidden sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn bg-aml hover:bg-aml-b w-full mb-4 sm:w-auto sm:mb-0" href="/form-chofer">
                ¡Quiero ofrecer mis servicios!
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* <Swipers /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
