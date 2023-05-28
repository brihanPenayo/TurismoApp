import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">¿Por qué nosotros?</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4">
                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512" xml:space="preserve">
                  <g>
                    <rect x="119.256" y="222.607" class="st0" width="50.881" height="50.885" />
                    <rect x="341.863" y="222.607" class="st0" width="50.881" height="50.885" />
                    <rect x="267.662" y="222.607" class="st0" width="50.881" height="50.885" />
                    <rect x="119.256" y="302.11" class="st0" width="50.881" height="50.885" />
                    <rect x="267.662" y="302.11" class="st0" width="50.881" height="50.885" />
                    <rect x="193.46" y="302.11" class="st0" width="50.881" height="50.885" />
                    <rect x="341.863" y="381.612" class="st0" width="50.881" height="50.885" />
                    <rect x="267.662" y="381.612" class="st0" width="50.881" height="50.885" />
                    <rect x="193.46" y="381.612" class="st0" width="50.881" height="50.885" />
                    <path class="st0" d="M439.277,55.046h-41.376v39.67c0,14.802-12.195,26.84-27.183,26.84h-54.025
		c-14.988,0-27.182-12.038-27.182-26.84v-39.67h-67.094v39.297c0,15.008-12.329,27.213-27.484,27.213h-53.424
		c-15.155,0-27.484-12.205-27.484-27.213V55.046H72.649c-26.906,0-48.796,21.692-48.796,48.354v360.246
		c0,26.661,21.89,48.354,48.796,48.354h366.628c26.947,0,48.87-21.692,48.87-48.354V103.4
		C488.147,76.739,466.224,55.046,439.277,55.046z M453.167,462.707c0,8.56-5.751,14.309-14.311,14.309H73.144
		c-8.56,0-14.311-5.749-14.311-14.309V178.089h394.334V462.707z"/>
                    <path class="st0" d="M141.525,102.507h53.392c4.521,0,8.199-3.653,8.199-8.144v-73.87c0-11.3-9.27-20.493-20.666-20.493h-28.459
		c-11.395,0-20.668,9.192-20.668,20.493v73.87C133.324,98.854,137.002,102.507,141.525,102.507z"/>
                    <path class="st0" d="M316.693,102.507h54.025c4.348,0,7.884-3.513,7.884-7.826V20.178C378.602,9.053,369.474,0,358.251,0H329.16
		c-11.221,0-20.349,9.053-20.349,20.178v74.503C308.81,98.994,312.347,102.507,316.693,102.507z"/>
                  </g>
                </svg>
              </div>
              <h4 className="h4 mb-2 text-center">Planificación de Turismo Simplificada</h4>
              <p className="text-lg text-gray-500 text-center">Con nuestra plataforma, puedes planificar y realizar tu visita en un solo lugar. Elige tu destino, selecciona tu alojamiento, organiza tu transporte, reserva tus actividades y más, todo con unos pocos click.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4">
                <svg className='w-20 scale-125 h-20' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="m49.91 50.6-4.91-4.91a1.36 1.36 0 0 0 -2 0l-1.94 2a1.33 1.33 0 0 0 0 1.94l6.94 6.81a2.7 2.7 0 0 0 1.95.83 2.67 2.67 0 0 0 1.94-.83l14.11-14.17a1.34 1.34 0 0 0 0-2l-1.94-1.94a1.34 1.34 0 0 0 -1.95 0z" />
                    <path d="m71.81 54.15a23.31 23.31 0 0 0 0-8.6l4.6-3.9a4.28 4.28 0 0 0 1-5.3l-2-3.5a4.11 4.11 0 0 0 -3.6-2 3.19 3.19 0 0 0 -1.4.3l-5.8 2.1a22.35 22.35 0 0 0 -7.4-4.3l-1-5.9a3.92 3.92 0 0 0 -4.1-3.1h-4a3.85 3.85 0 0 0 -4.1 3.1l-1 5.8a21.59 21.59 0 0 0 -7.5 4.3l-5.9-2.1a7 7 0 0 0 -1.4-.3 4.2 4.2 0 0 0 -3.6 2l-2 3.5a4.16 4.16 0 0 0 1 5.3l4.6 3.9a20.87 20.87 0 0 0 -.4 4.3 20.24 20.24 0 0 0 .4 4.3l-4.6 3.95a4.28 4.28 0 0 0 -1 5.3l2 3.5a4.11 4.11 0 0 0 3.6 2 3.19 3.19 0 0 0 1.4-.3l5.8-2.1a22.35 22.35 0 0 0 7.4 4.3l1 6a4.1 4.1 0 0 0 4.1 3.4h4a4.18 4.18 0 0 0 4.1-3.5l1-6a22.06 22.06 0 0 0 7.8-4.6l5.4 2.1a8 8 0 0 0 1.5.3 4.2 4.2 0 0 0 3.6-2l1.9-3.3a3.67 3.67 0 0 0 -.8-5zm-3.39-9.34-4.55 4.56v.78a13.85 13.85 0 1 1 -6.7-11.81l2.45-2.44a4.84 4.84 0 0 1 6.89 0l2 2a4.9 4.9 0 0 1 1.43 3.7 4.66 4.66 0 0 1 -1.52 3.21z" />
                  </g>
                </svg>
              </div>
              <h4 className="h4 mb-2 text-center">Experiencias Auténticas y Personalizadas:</h4>
              <p className="text-lg text-gray-500 text-center">Descubre una amplia gama de servicios ofrecidos por proveedores locales. Desde guías locales hasta restaurantes auténticos, personaliza tu viaje para que se ajuste a tus preferencias y experimenta tu destino como un local.
                {/*  */}</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4472 1.10557C12.1657 0.964809 11.8343 0.964809 11.5528 1.10557L3.55279 5.10557C3.214 5.27496 3 5.62123 3 6V12C3 14.6622 3.86054 16.8913 5.40294 18.7161C6.92926 20.5218 9.08471 21.8878 11.6214 22.9255C11.864 23.0248 12.136 23.0248 12.3786 22.9255C14.9153 21.8878 17.0707 20.5218 18.5971 18.7161C20.1395 16.8913 21 14.6622 21 12V6C21 5.62123 20.786 5.27496 20.4472 5.10557L12.4472 1.10557ZM5 12V6.61803L12 3.11803L19 6.61803V12C19 14.1925 18.305 15.9635 17.0696 17.425C15.8861 18.8252 14.1721 19.9803 12 20.9156C9.82786 19.9803 8.11391 18.8252 6.93039 17.425C5.69502 15.9635 5 14.1925 5 12ZM16.7572 9.65323C17.1179 9.23507 17.0714 8.60361 16.6532 8.24284C16.2351 7.88207 15.6036 7.9286 15.2428 8.34677L10.7627 13.5396L8.70022 11.5168C8.30592 11.1301 7.67279 11.1362 7.28607 11.5305C6.89935 11.9248 6.90549 12.5579 7.29978 12.9446L10.1233 15.7139C10.3206 15.9074 10.5891 16.0106 10.8651 15.9991C11.1412 15.9876 11.4002 15.8624 11.5807 15.6532L16.7572 9.65323Z" fill="#000000" />
                </svg>
              </div>
              <h4 className="h4 mb-2 text-center">Reservas Seguras y Transparentes:</h4>
              <p className="text-lg text-gray-500 text-center">Reserva con confianza sabiendo que ofrecemos información completa y honesta sobre cada servicio, junto con reseñas de usuarios reales. Nuestra plataforma asegura que tus reservas estén seguras y que siempre obtengas lo que pagas.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
