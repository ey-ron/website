import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import Experience from "@components/Experience";
import AboutMe from "@components/AboutMe";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Aaron Serrano"
      description="Portfolio"
    >
      <div className="md:hidden lg:hidden w-full md:w-1/4 -mr-40 mt-0">
          <img src={userData.avatarUrl} alt="avatar" className="shadow w-80 h-50 mx-auto" />
      </div>
      <Hero />
      <div className="md:hidden lg:hidden w-full md:w-1/4 -mr-40 mt-0">
          <AboutMe/>
      </div>
      {/*<FavouriteProjects />*/}
      <Experience/>
      {/*<LatestCode repositories={repositories} />*/}
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
