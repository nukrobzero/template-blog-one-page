import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function WorkSection() {
  const [repos, setRepos] = useState([]);
  const [numPosts, setNumPosts] = useState(8);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("api/getRepo");
      const sortedRepos = res.data.sort((a: any, b: any) => b.id - a.id);
      setRepos(sortedRepos);
    };
    fetchData();
  }, []);

  const handleShowMore = () => {
    setNumPosts(numPosts + 8);
    if (sectionRef.current) {
      sectionRef.current.style.height = "auto";
    }
  };

  return (
    <>
      <section className="mt-36" id="work" ref={sectionRef}>
        <div className="max-w-7xl mx-auto p-4 h-full">
          <div className="flex flex-col justify-center">
            <div className="container mx-auto my-8">
              <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                My Repositories on Github
              </h1>
            </div>
            <div className="container mx-auto my-8">
              <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6 md:mx-0">
                {repos.slice(0, numPosts).map((repo: any) => (
                  <li key={repo.id} className="group">
                    <Link href={repo.html_url} target="_blank">
                      <div className="md:h-[400px] bg-white text-black hover:shadow-xl rounded-md">
                        <figure className="overflow-hidden bg-cover bg-no-repeat rounded-t-md">
                          <Image
                            src="https://source.unsplash.com/random"
                            width={400}
                            height={300}
                            alt="Card"
                            layout="responsive"
                            style={{ objectFit: "cover" }}
                            className="!h-[200px] transform hover:scale-110 transition duration-500 ease-in-out group-hover:scale-110"
                          />
                        </figure>
                        <div className="p-4 h-52">
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-[length:0%_3px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_4px] transition-all duration-500">
                            {repo.name}
                          </span>
                          <p>{repo.description}</p>
                          <p className="text-xs pt-6">
                            Created Date:
                            {new Date(repo.created_at).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "numeric",
                                year: "2-digit",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    </Link>
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
