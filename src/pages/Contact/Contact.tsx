import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-teal-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        <div className="flex flex-col items-center">
          <h2 className="text-green-700 text-2xl font-bold mb-4">Siga-nos</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-green-700 text-2xl hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="text-green-700 text-2xl hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-green-700 text-2xl hover:text-gray-300"><FaYoutube /></a>
            <a href="#" className="text-green-700 text-2xl hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="text-green-700 text-2xl hover:text-gray-300"><FaTelegram /></a>
          </div>
        </div>

        <div className="text-center">
          <h2 className=" text-green-700 text-2xl font-bold mb-4">O que nós fazemos?</h2>
          <p className="text-green-700">
            Somos uma Organização Governamental sem Fins Lucrativos (ONG), que tem como objetivo tornar o mercado de trabalho mais inclusivo.
            Desde 2011, assumimos o compromisso social de impactar vidas de pessoas com deficiência através da capacitação profissional.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <form className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md">
            <label className="text-gray-800 font-medium">
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
            ></textarea>

            <button className="bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
              ENVIAR
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
