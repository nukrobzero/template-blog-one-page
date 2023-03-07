import Head from "next/head";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WorkSection from "@/components/sections/myWork";
import ContactSection from "@/components/sections/contact";
import Skill from "@/components/sections/skill";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello My Resume!</title>
        <meta name="description" content="Hello My Resume!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.png" />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <Skill />
        <WorkSection />
        <ContactSection />
      </main>
    </>
  );
}
<<<<<<< HEAD
=======

async function getRepos() {
  const res = await axios.post(`${process.env.HOST_URL}/api/getRepo`);
  return res.data;
}

export const getStaticProps: GetStaticProps = async () => {
  const resData = await getRepos();
  return {
    props: {
      repos: resData,
      revalidate: 10,
    },
  };
};
>>>>>>> 6b708cfc45ce2fa455a4d7f5481d4fd616e350a5
