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
