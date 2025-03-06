import quemSomos from '../../assets/imgs/quemSomos.png';
import doe from '../../assets/imgs/doe.jpg';

interface AboutUsProps {
  aboutRef?: React.RefObject<HTMLDivElement>;
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutRef }) =>  {
  return (
    <div  ref={aboutRef} className="animate-slide-in-left bg-gray-50 py-16 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="lg:w-1/2" id="aboutt">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre nós</h2>
          <p className="text-gray-700 mb-6">
            A Taniguchiana “nasceu” em 2011. Nossa fundadora foi professora de Jovem Aprendiz de uma grande Instituição Qualificadora. Por meio desta experiência, teve contato com jovens carentes e sentiu o quão enriquecedor é o programa para as suas vidas, tendo a chance da tão sonhada inserção no mercado de trabalho, podendo ajudar as suas famílias. A primeira ideia era em “cuidar” dos jovens pós término contrato do programa aprendizado, já que o projeto jovem aprendiz, é dos 14 aos 24 anos, e estes jovens se não são efetivados pela empresa, assim que termina o contrato, eles “voltam para o mesmo lugar de onde saíram”. E isto começou a lhe intrigar. Taniguchiana foi o nome escolhido para a ONG. É derivado do grande mentor espiritual da Seicho-No-Ie, o Sr. Masaharu Taniguchi, tendo em vista a orientação de nossa fundadora para seguir com o projeto e por abrir a minha visão para aqueles que mais precisam de nossa ajuda e colaboração.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={quemSomos}
            alt="Quem somos"
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>

      <div
        className="relative mt-16 py-24 px-6 text-white rounded-lg bg-fixed bg-cover bg-center md:bg-[50%_30%] lg:bg-[50%_20%]"
        style={{
          backgroundImage: `url(${doe})`,
        }}>

        <div className="max-w-4xl mx-auto text-center" >
          <h3 className="text-lg font-semibold uppercase tracking-wide text-green-700">
            Quer fazer a diferença?
          </h3>
          
          <h2 className="text-4xl font-bold my-4 text-green-700">
            Ajude-nos a arrecadar fundos para nossas causas humanitárias 
          </h2>

          <button className="bg-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all relative z-10 animate-pulse-slow">
            Doar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
