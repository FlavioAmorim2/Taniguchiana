import doe from '../assets/imgs/doee.jpg';

// interface AboutUsProps {
//   aboutRef?: React.RefObject<HTMLDivElement>;
// }

const Doe = () => {
   return (
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

    
    
  );
};

export default Doe;

