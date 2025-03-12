import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { history } from "../../context/history";
import doe from '../../assets/imgs/doee.jpg';



interface AboutUsProps {
  aboutRef?: React.RefObject<HTMLDivElement>;
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutRef }) => {
  const historia = history

  const [, setSlideAtivo] = useState(0);

  return (
    <div ref={aboutRef} className=" bg-gray-50 py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Nossa História
      </h2>

      <div className="w-full max-w-6xl">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-full rounded-xl shadow-lg bg-gray-100"
          onSlideChange={(swiper) => setSlideAtivo(swiper.activeIndex)}
        >
          {historia.map((item, index) => (
           <SwiperSlide
           key={index}
           className="flex flex-col items-center justify-center text-center px-8 h-full"
         >
           <h3 className="text-lg font-semibold text-green-900">
             {item.ano}
           </h3>
           <p className="col-span-9 text-gray-700 text-left leading-relaxed ml-7 mr-7 ">
            {item.texto.map((paragrafo: string, idx: number) => (
              <span key={idx} className="block mb-4">{paragrafo}</span>
            ))}
          </p>
         </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="relative w-full max-w-7xl mx-auto mt-16 py-24 px-6 text-white rounded-lg bg-fixed bg-cover bg-center md:bg-[50%_30%] lg:bg-[50%_20%] before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{
          backgroundImage: `url(${doe})`,
        }}>

        <div className="absolute inset-0 bg-black opacity-50 rounded-lg "></div>

        <div className=" relative max-w-4xl mx-auto text-center " >
          <h3 className="text-lg font-semibold uppercase tracking-wide ">
            Quer fazer a diferença?
          </h3>
          
          <h2 className=" relative text-4xl font-bold my-4  ">
            Ajude-nos a arrecadar fundos para nossas causas humanitárias 
          </h2>

          <button className="bg-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all relative z-10 animate-pulse-slow">
           <a href="https://www.asaas.com/c/225559079703" target='_blank'>Doar</a> 
          </button>
        </div>
      </div>
    </div>

    
    
  );
};

export default AboutUs;

