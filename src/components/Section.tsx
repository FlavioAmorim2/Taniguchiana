import React from "react";

interface SectionProps {
  title: string;
  description: string;
  image: string;
  textPosition: "left" | "right";
}

const Section: React.FC<SectionProps> = ({ title, description, image, textPosition }) => {
  const flexDirection = textPosition === "right" ? "flex-row-reverse" : "flex-row";

  return (
    <section className={`flex ${flexDirection} bg-gray-100 p-6 rounded-lg shadow-md`}>
      <div className="w-1/2">
        <img src={image} alt={title} className="w-full h-auto rounded-md shadow-md" />
      </div>

      <div className="w-1/2 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </section>
  );
};

export default Section;
