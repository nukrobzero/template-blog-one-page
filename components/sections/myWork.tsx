import Image from "next/image";
import { useState, useRef } from "react";

export default function WorkSection({ repos }: any) {
  const [numPosts, setNumPosts] = useState(8);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleShowMore = () => {
    setNumPosts(numPosts + 8);
    if (sectionRef.current) {
      sectionRef.current.style.height = "auto";
    }
  };

  return (
    <>
      <section className="bg-amber-300 min-h-screen" id="work" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center">
            <div className="container mx-auto">
              <h1 className="text-4xl text-center mt-20">
                My Repositories on Github
              </h1>
            </div>
            <div className="container mx-auto">
              <ul className="grid grid-cols-2 md:grid-cols-4 text-2xl text-center gap-5 mt-20 mb-20">
                {repos.slice(0, numPosts).map((repo: any) => (
                  <li
                    key={repo.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="w-full h-48 object-cover">
                      <Image
                        src="https://cdn.pixabay.com/photo/2014/10/25/20/27/rubber-bands-503028_960_720.jpg"
                        alt="Card"
                        width={300}
                        height={192}
                      />
                    </div>
                    <div className="p-6">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        className="font-bold text-2xl mb-2 hover:text-blue-500"
                      >
                        {repo.name}
                      </a>
                      <p className="text-gray-700 text-base">
                        {repo.description}
                      </p>
                      <p className="text-xs mt-2">
                        Created Date:{" "}
                        {new Date(repo.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "numeric",
                          year: "2-digit",
                        })}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {numPosts < repos.length && (
                <div className="text-center mt-10 mb-20">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-full"
                    onClick={handleShowMore}
                  >
                    Show More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
