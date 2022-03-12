import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Layout from "../components/layout/layout";
import Card from "../components/cards/card";

export default function Home() {
  return (
    <>
      <Layout>
        <Card />
      </Layout>
    </>
  );
}
