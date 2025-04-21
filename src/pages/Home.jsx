import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Carousel from '../components/Carousel';
import Footer from '../components/footer';
const Home = () => {
  return (
    <>
      <Hero />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoSection
          title="Conecta con tiendas locales"
          img="https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_1280.jpg"
          description="Descubre productos únicos y apoya el comercio de tu comunidad."
        />
        <InfoSection
          title="Calidad textil garantizada"
          img="https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399_1280.jpg"
          description="Seleccionamos cuidadosamente textiles de alta durabilidad y confort."
        />
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
