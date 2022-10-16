import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Welcome from "../components/Welcome";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import Experience from "@components/Experience";
import AboutMe from "@components/AboutMe";
import Opportunity from "@components/Opportunity";

export default function Home({ repositories }) {

  return (
    <ContainerBlock
      title="Aaron Serrano"
      description="Portfolio">

      <Welcome/>
      <AboutMe/>
      <Experience/>
      <Opportunity/>
      {/*<FavouriteProjects />*/}
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
