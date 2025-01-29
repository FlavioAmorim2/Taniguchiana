import React from "react";

interface SectionProps {
  title: string;
  description: string;
  image: string;
  textPosition: "left" | "center" | "right";
}

const Section: React.FC<SectionProps> = ({ title, description, image, textPosition }) => {
  const textAlign = textPosition === "center" ? "text-center" : "text-left";
  const justifyContent =
    textPosition === "right"
      ? "justify-end"
      : textPosition === "center"
      ? "justify-center"
      : "justify-start";

  return (
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-30`}
      ></div>
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto px-6 flex ${justifyContent}`}
      >
        <div className={`bg-white p-6 rounded-md shadow-lg max-w-sm ${textAlign}`}>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <a
            href="#"
            className="text-blue-500 font-semibold hover:underline"
          >
            Leia mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
