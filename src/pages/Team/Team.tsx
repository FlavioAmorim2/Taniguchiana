import Silvana from "../../assets/ProfileImg/Silvana.png";
import Paola from "../../assets/ProfileImg/Paola.png";
import "../../styles/team.css"

const Team: React.FC = () => {
  
    return (
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start px-4 py-16">
          <h1 className="text-5xl font-bold text-green-700 mb-12 text-center"> 
            Conheça nossa equipe
          </h1>
    
          <p className="text-lg md:text-2xl text-gray-700 leading-relaxed max-w-4xl text-justify mb-10">
            A <strong className="font-semibold">TANIGUCHIANA</strong> conta, naturalmente, com um time multidisciplinar altamente capacitado, dedicado e preparado para acolher, capacitar e impulsionar o público em geral. Nossa equipe reúne competência técnica e sensibilidade para desenvolver, qualificar e integrar pessoas, sempre alinhando-se às necessidades operacionais e estratégicas dos nossos parceiros, com excelência e comprometimento.
          </p> 


          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 items-start justify-center"> {/* Cards */}
          
          {/* Card Silvana ------------------------------------------------------- */}
          <div className="max-w-md flex flex-col items-center text-center">
              <h4 className="uppercase text-sm text-gray-500 mb-1">Idealizadora e Presidente</h4>
              <hr className="border-t-2 border-green-700 w-24 mb-4" />
              <img
                src={Silvana} 
                alt="Silvana Peres dos Santos"
                className=" max-w-[90%] h-auto rounded-lg mb-4 team-img"
              />
              <h2 className="text-2xl font-bold text-green-700 mb-2">Silvana Peres</h2>
              <p className="text-justify text-base text-gray-700 leading-relaxed">
                Fisioterapeuta direcionada às pessoas com deficiência e consultora de desenvolvimento humano,
                especialização em fisioterapia neurológica, MBA em Administração Estratégica e MBA em Gestão
                Estratégica de Pessoas, possui mais de 10 anos de experiência na área administrativa, prática e teórica,
                professora, consultora em desenvolvimento pessoal, profissional e espiritual. Analista de Mapeamento
                de Perfil Comportamental, Certificação Master DISC I.
              </p>
            </div>

            {/* Card Paola -----------------------------------------------------------*/}
            <div className="max-w-md flex flex-col items-center text-center ">
              <h4 className="uppercase text-sm text-gray-500 mb-1">Vice Presidente</h4>
              <hr className="border-t-2  border-green-700 w-24 mb-4" />
              <img
                src={Paola} 
                alt="Paola dos Santos Olimpio de Souza"
                className="max-w-[90%] h-auto rounded-lg mb-4 team-img"
              />
              <h2 className="text-2xl font-bold text-green-700 mb-2">Paola dos Santos</h2>
              <p className="text-justify text-base text-gray-700 leading-relaxed">
                Graduada em Educação Física pela UNESA. MBA em Planejamento e Gestão Estratégica de Pessoas pela UNINTER,
                Analista de Mapeamento de Perfil Comportamental, Certificação Master DISC I, Coordenadora Técnica na área Aquática – Academia Aqualife Fitness.
                Em 2011 iniciamos este grandioso projeto no auxílio e capacitação aos jovens aprendizes e PcD’s para o mercado de trabalho!
                Meu papel neste desenvolvimento é ofertar conhecimento para o crescimento e aprendizado na melhoria da eficiência,
                na produção do talento individual para o mercado de trabalho!
              </p>
            </div>
        </div>

        <section className="team-list w-full max-w-6xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          
          <div>
            <h3 >Pedagogia</h3>
            <ul >
              <li>Desenvolvimento de projetos educacionais</li>
              <li>Criação de conteúdos para os cursos</li>
            </ul>
          </div>

          <div>
            <h3>Recursos Humanos</h3>
            <ul>
              <li>Contratação de equipe</li>
              <li>Gestão profissional</li>
            </ul>
          </div>

          <div>
            <h3>Comercial</h3>
            <ul>
              <li>Aberto a novas parcerias</li>
              <li>Contato direto com empresas e parceiros</li>
            </ul>
          </div>

          <div className="border-t border-black pt-4">
            <h3>Jurídico</h3>
            <ul>
              <li>Suporte legal</li>
              <li>Atua na elaboração de pareceres</li>
            </ul>
          </div>

          <div className="border-t border-black pt-4">
            <h3>Tecnologia</h3>
            <ul>
              <li>Infraestrutura e suporte</li>
              <li>Time de desenvolvimento</li>
            </ul>
          </div>

          <div className="border-t border-black pt-4">
            <h3>Contabilidade</h3>
            <ul>
              <li>Gestão de recursos e contas a pagar</li>
              <li>Cumprimento de obrigatoriedades fiscais</li> 
            </ul>
          </div>

          <div className="border-t border-black pt-4">
            <h3>Administração</h3>
            <ul>
              <li>O fracasso vem pela falta de planejamento</li>
              <li>Ser administrador é dominar o mundo !</li>
            </ul>
          </div>
        </section>

      </div>
    );
  };
  
  export default Team;
