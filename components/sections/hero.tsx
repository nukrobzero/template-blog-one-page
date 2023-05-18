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
      <section className="my-48" id="hero">
        <div className="max-w-7xl mx-auto p-4 h-full">
          <div className="container flex flex-col justify-center items-center h-full md:flex-row">
            <div className="container text-center md:text-center sm: mb-10">
              <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                Good
                <span
                  id="typed"
                  className="text-yellow-50 border-gray-50 "
                ></span>
              </h1>
            </div>
            <div className="container flex justify-center ">
              <Image
                src="https://img.lovepik.com/element/40120/1491.png_860.png"
                alt="Card"
                width={300}
                height={300}
                layout="responsive"
                style={{ objectFit: "cover" }}
                className="rounded-lg !w-[300px] !h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
