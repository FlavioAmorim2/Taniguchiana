interface SectionProps {
    title: string;
    description: string | string[];
    image: string;
    textPosition: "left" | "right";
}
declare const Section: React.FC<SectionProps>;
export default Section;
