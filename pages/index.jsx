import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";
import Card from "../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black">
      <div className="pt-5 flex flex-col w-11/12 lg:max-w-screen-2xl place-items-center h-full mx-auto">
        <div className="pt-10 md:pt-32">
          <Head>
            <title>Phil Smithies: Dev</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className="md:mt-30 mb-15 max-w-7xl flex flex-col justify-center items-center">
            <div className="md:ml-20">
              <Intro />
              <About />
            </div>
            <div
              id="projects"
              className="flex flex-col mb-10 lg:ml-10 md:mt-40 max-w-screen-lg w-full items-center"
            >
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h2 className="text-5xl font-bold lg:mr-10 text-white mt-5">
                  View my projects
                </h2>
                <p className="text-white ml-2 mb-10 md:mb-0">
                  All of my projects can be seen{" "}
                  <Link href="/projects" passHref>
                    <span className="text-teal300">here</span>
                  </Link>
                </p>
              </div>

              <div
                className="flex flex-col md:flex-row flex-wrap mx-auto justify-center"
                data-aos="fade-in"
              >
                <div className="min-w-min w-96 mt-4 md:mr-4" data-aos="fade-in">
                  <Card
                    imageUrl="/gated-home-wide.png"
                    imageAlt={"Gated Records"}
                    title={"Gated Records"}
                    body={
                      "Gated Records - Record Label E-Commerce built using Typescript and Next.js"
                    }
                    link={"https://github.com/philsmithies/gated-recs-next-js"}
                    react={true}
                    javascript={true}
                    node={true}
                  />
                </div>
                <div className="min-w-min w-96 mt-4">
                  <Card
                    imageUrl={"/preview_map.png"}
                    imageAlt={"Shuttr - A Photo Location Discovery Application"}
                    title={"Shuttr"}
                    body={
                      "A Photo Sharing and Location Discovery Application combining the Google Maps API with image sharing."
                    }
                    link={"https://www.github.com/philsmithies/shuttr"}
                    react={true}
                    javascript={true}
                    node={true}
                  />
                </div>
                <div className="min-w-min w-96 mt-4 md:mr-4">
                  <Card
                    imageUrl={"/maelys-home-wide.png"}
                    imageAlt={"Maelys Portfolio"}
                    title={"Maëlys Chay - Illustration Portfolio"}
                    body={
                      "An illustrators portfolio built using Next.js & Typescript 🎨 Sanity.io Headless CMS. Tailwind CSS."
                    }
                    link={"https://github.com/philsmithies/maelys_portfolio"}
                    react={true}
                    javascript={true}
                    node={true}
                    position={"bottom"}
                  />
                </div>
                <div className="min-w-min w-96 mt-4">
                  <Card
                    imageUrl={"/sport-team.png"}
                    imageAlt={"Sport Team"}
                    title={"Sport Team"}
                    body={
                      "Sport Team coaching interface, using Typescript, GraphQL and Next.js."
                    }
                    link={"https://github.com/philsmithies/sport-team/"}
                    react={true}
                    javascript={true}
                  />
                </div>
              </div>
            </div>
            <div
              id="contact"
              data-aos="fade-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="md:pt-32 md:mb-32"
            >
              {" "}
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
