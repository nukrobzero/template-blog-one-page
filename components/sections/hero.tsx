import Image from "next/image";
import { useEffect } from "react";
import Typed from "typed.js";

export default function HeroSection() {
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: ["Day!", "Night!", "Everything's!"],
      loop: true,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1600,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="bg-indigo-500 h-screen" id="hero">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center items-center h-full md:flex-row">
            <div className="container mx-auto text-center md:text-center">
              <h1 className="text-4xl md:text-6xl">
                Good
                <span
                  id="typed"
                  className="text-yellow-50 border-gray-50"
                ></span>
              </h1>
            </div>
            <div className="flex justify-center mx-auto rounded-3xl max-h-full max-w-md object-cover">
              <Image
                src="https://cdn.pixabay.com/photo/2014/10/25/20/27/rubber-bands-503028_960_720.jpg"
                alt="Card"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
