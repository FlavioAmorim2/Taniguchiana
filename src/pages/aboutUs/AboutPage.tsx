import { history } from "../../context/history";

interface AboutUsProps {
  aboutRef?: React.RefObject<HTMLDivElement>;
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="bg-gray-50 py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Nossa História
      </h2>

      <div className="w-full max-w-6xl px-8">
        {history.map((item, index) => (
          <div key={index} className="grid grid-cols-12 gap-x-8 items-start mb-10">
            {/* Data */}
            <h3 className="col-span-3 text-lg font-semibold text-green-900 text-right">
              {item.ano}
            </h3>

            {/* Texto */}
            <div className="col-span-9 text-gray-700 text-left leading-relaxed border-l-2 border-green-700 pl-6">
              {item.texto.map((paragrafo: string, idx: number) => (
                <p key={idx} className="mb-4">{paragrafo}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
