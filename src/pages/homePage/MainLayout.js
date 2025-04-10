import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Section from '../../components/Section';
import missao from '../../assets/imgs/missao.jpg';
import visao from '../../assets/imgs/visao.jpg';
import valores from '../../assets/imgs/valores.jpg';
const MainLayout = () => {
    return (_jsxs("div", { className: "space-y-16 py-10 px-6 max-w-6xl mx-auto", children: [_jsx(Section, { title: "Miss\u00E3o", description: "Capacitar e qualificar o p\u00FAblico em geral, oferecendo oportunidades de aprendizado acess\u00EDveis e inclusivas. Fornecemos conte\u00FAdos de qualidade e ferramentas eficazes para impulsionar carreiras e transformar vidas.", image: missao, textPosition: "left" }), _jsx(Section, { title: "Vis\u00E3o", description: "Ser refer\u00EAncia em capacita\u00E7\u00E3o e qualifica\u00E7\u00E3o profissional, disponibilizando um portal completo de cursos t\u00E9cnicos e profissionalizantes, tanto presenciais quanto a dist\u00E2ncia (EAD), garantindo acessibilidade e excel\u00EAncia no ensino.", image: visao, textPosition: "right" }), _jsx(Section, { title: "Valores", description: [
                    "1) Respeito e valorização do ser humano.",
                    "2) Ética e profissionalismo incondicionais nas relações com todos os segmentos da sociedade.",
                    "3) Desenvolvimento e aprimoramento constante de seus colaboradores."
                ], image: valores, textPosition: "left" })] }));
};
export default MainLayout;
