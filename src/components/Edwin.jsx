import React, { useEffect } from "react";
import edwin from "../assets/edwin.jpg"; // Ensure the path to the image is correct.
import { gsap } from "gsap";

const Edwin = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-gray-500 px-4">
      <div className="max-w-6xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="image p-4">
          <img
            src={edwin}
            alt="Edwin Lord Weeks"
            className="rounded-lg shadow-lg w-80 md:w-[30rem] lg:w-[35rem]"
          />
        </div>
        {/* Biography Section */}
        <div className="content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Edwin Lord Weeks
          </h1>
          <p className="text-lg leading-relaxed text-justify">
            Edwin Lord Weeks (1849–1903) was an American artist, adventurer, and
            author, best known for his paintings depicting the cultures and
            landscapes of the Middle East, India, and North Africa. Born in
            Boston, Massachusetts, Weeks displayed an early talent for art and
            an insatiable curiosity for faraway lands. He studied art in Paris
            under prominent painters like Léon Bonnat and Jean-Léon Gérôme, who
            influenced his detailed, academic style.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            Weeks' travels formed the foundation of his artistic legacy. He
            undertook perilous journeys to Morocco, Persia, and India, immersing
            himself in their vibrant cultures. His works vividly captured
            bustling bazaars, majestic palaces, and serene landscapes, often
            incorporating the interplay of light and shadow to enhance the
            exotic appeal. Paintings like *The Last Voyage* and *The Rajah
            Starting on a Hunt* are celebrated for their meticulous
            craftsmanship and narrative depth.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-justify">
            In addition to painting, Weeks wrote extensively about his
            experiences, providing a window into the regions he explored. His
            works remain a testament to the 19th-century fascination with
            Orientalism, blending artistic mastery with a deep appreciation for
            the diverse cultures he encountered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edwin;
