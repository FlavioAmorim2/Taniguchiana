import Section from '../../components/Section';
import missao from '../../assets/imgs/missao.jpg';
import visao from '../../assets/imgs/visao.jpg';
import valores from '../../assets/imgs/valores.jpg';

const MainLayout = () => {
  return (
    <div className="space-y-16 py-10 px-6 max-w-6xl mx-auto">
      <Section
        title="Missão"
        description="Capacitar e qualificar o público em geral, oferecendo oportunidades de aprendizado acessíveis e inclusivas. Fornecemos conteúdos de qualidade e ferramentas eficazes para impulsionar carreiras e transformar vidas."
        image={missao}
        textPosition="left"
      />

      <Section
        title="Visão"
        description="Ser referência em capacitação e qualificação profissional, disponibilizando um portal completo de cursos técnicos e profissionalizantes, tanto presenciais quanto a distância (EAD), garantindo acessibilidade e excelência no ensino."
        image={visao}
        textPosition="right"
      />
  
      <Section
         title="Valores"
         description={[
           "1) Respeito e valorização do ser humano.",
           "2) Ética e profissionalismo incondicionais nas relações com todos os segmentos da sociedade.",
           "3) Desenvolvimento e aprimoramento constante de seus colaboradores."
         ]}
         image={valores}
         textPosition="left"
      />

      
    </div>
  );
};

export default MainLayout;

