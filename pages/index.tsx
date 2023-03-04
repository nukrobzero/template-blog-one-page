import Head from "next/head";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WorkSection from "@/components/sections/myWork";
import ContactSection from "@/components/sections/contact";
import { GetStaticProps } from "next";
import axios from "axios";

type Prop = {
  repos: string;
};

export default function Home({ repos }: Prop) {
  return (
    <>
      <Head>
        <title>Hello My Resume!</title>
        <meta name="description" content="Hello My Resume!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <HeroSection />
        <AboutSection />
        <WorkSection repos={repos} />
        <ContactSection />
      </main>
    </>
  );
}

async function getRepos() {
  const res = await fetch(`http://localhost:3000/api/getRepo`);
  return res.json();
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
