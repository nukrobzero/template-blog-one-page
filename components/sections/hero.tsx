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
          <div className="container flex flex-col justify-center items-center h-full md:flex-row">
            <div className="container text-center md:text-center sm: mb-10">
              <h1 className="text-4xl md:text-6xl">
                Good
                <span
                  id="typed"
                  className="text-yellow-50 border-gray-50"
                ></span>
              </h1>
            </div>
            <div className="container flex justify-center w-[400px] h-[500px] lg:w-[500px] lg:h-[400px]">
              <Image
                src="https://source.unsplash.com/random"
                alt="Card"
                width={1920}
                height={1080}
                className="rounded-[50px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
