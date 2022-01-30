import { useContext } from "react";
import Start from "../src/components/Start";
import Board from "../src/components/Board";
import { GameContext } from "../src/Controller/GameContex";
import Model from "../src/components/Model";
import Head from "next/head";

export default function Home() {
  const { screen } = useContext(GameContext);

  return (
    <div>
      <Head>
        <title>Tic-Tac-Toe</title>
        <meta
          name="facebook-domain-verification"
          content="wcnj19z22s6wock9qgbanshbqjzt1g"
        />
        <meta property="og:title" content="Serinc Software House Empire" />
        <meta
          property="og:description"
          content="We build successful and sustainable enterprises from the ground up by capitalizing on our expertise, resources and network."
        />
        <meta property="og:url" content="http://serinc.online" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Serinc Software House" />
        <meta
          name="twitter:description"
          content="We build successful and sustainable enterprises from the ground up by capitalizing on our expertise, resources and network."
        />
      </Head>
      <div className="main">
        <div className="container">
          {screen === "start" ? <Start /> : <Board />}
          <Model />
          <br />
          <div className="footer_content">
            <p>
              Copyright © {new Date().getFullYear()}. All rights reserved.{" "}
              <br />
              Developed by
              <a
                className="fn__link"
                href="https://coder79.online/"
                target="_blank"
                rel="noreferrer"
              >
                Coder79
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
