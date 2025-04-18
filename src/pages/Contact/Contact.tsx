import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 text-white py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        <div className="flex flex-col items-center">
          <h2 className="text-green-700 text-2xl font-bold mb-4">Siga-nos</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/taniguchianaong" target="_blank" className="text-green-700 text-2xl hover:text-gray-300"><FaFacebook /></a>
            <a href="https://www.instagram.com/tanipcds/" target="_blank" className="text-green-700 text-2xl hover:text-gray-300"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UC_yVpjm9vkSfrPqdfZV7L-Q" target="_blank" className="text-green-700 text-2xl hover:text-gray-300"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/ong-taniguchiana/" target="_blank" className="text-green-700 text-2xl hover:text-gray-300"><FaLinkedin /></a>
            <a href="https://t.me/taniguchiana" target="_blank" className="text-green-700 text-2xl hover:text-gray-300"><FaTelegram /></a>
          </div>
        </div>

        <div className="text-center">
          <h2 className=" text-green-700 text-2xl font-bold mb-4">O que nós fazemos?</h2>
          <p className="text-green-700 text-left">
            Somos uma Organização Governamental sem Fins Lucrativos (ONG), que tem como objetivo tornar o mercado de trabalho um ambiente mais inclusivo. Desde 2011 assumimos o compromisso social de impactar vidas de pessoas com deficiência, através da capacitação profissional. Buscamos contribuir e representar uma parcela da sociedade pouco assistida, a fim de desenvolver um potencial de trabalho técnico e humano, oferecendo apoio e motivação para um estilo de vida socialmente inclusiva.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-black font-bold text-green-700 text-center mb-4">Contato</h2>
          <form className="bg-gray-100 flex flex-col space-y-4 bg-white p-6 rounded-lg text-center"> {/*shadow-md* /
            {/* <label className="text-gray-800 font-medium">
              Nome completo <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              className="border border-gray-300 p-2 rounded text-black"
              required
            />

            <label className="text-gray-800 font-medium">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              className="border border-gray-300 p-2 rounded text-black"
              required
            />

            <label className="text-gray-800 font-medium">
              Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea 
              className="border border-gray-300 p-2 rounded h-32 text-black"
              required
            ></textarea> */}
                  {/* <h2 className="text-black font-bold text-green-700 text-xl">Fale conosco</h2> */}
            <button className="bg-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-pulse-slow">
              <a href="https://forms.gle/PmvozApHJ9aUmxCv6" target="_blank">Click para enviar uma mensagem</a>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
