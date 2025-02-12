import Section from '../../components/Section';
import missao from '../../assets/imgs/missao.jpg'; 
import visao from '../../assets/imgs/visao.jpg';
import valores from '../../assets/imgs/valores.jpg'

const MainLayout = () => {
  return (
    <div className="space-y-16 py-10 px-6 max-w-6xl mx-auto">
      <Section
        title="Missão"
        description="A missão da ONG Taniguchiana é capacitar, qualificar e inserir Jovens Aprendizes PcDs no mercado de trabalho, em empresas públicas e privadas, de forma efetiva e consistente, reduzindo as diferenças sociais e promovendo a possibilidade da geração de emprego e renda, e independência financeira."
        image={missao}
        textPosition="left"
      />

      <Section
        title="Visão"
        description="A visão da ONG Taniguchiana é tornar-se referência na promoção, na capacitação, qualificação e reabilitação assistencial de PCDs para o mercado de trabalho através de metodologia adequada e inovadoras."
        image={visao}
        textPosition="right"
      />

      <Section
        title="Valores"
        description="A ONG Taniguchiana, tem como foco principal a inserção das pessoas com deficiência no mercado de trabalho. Com isso, nossos valores são: ética profissional, respeito mútuo, adequação organizacional e crescimento profissional."
        image={valores}
        textPosition="left"
      />
    </div>
  );
};

export default MainLayout;

