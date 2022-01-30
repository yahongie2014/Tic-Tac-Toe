import "../styles/globals.css";
import { GameState } from "../src/Controller/GameContex";
import { ModalState } from "../src/Controller/ModalContext";

function MyApp({ Component, pageProps }) {
  return (
    <ModalState>
      <GameState>
        <Component {...pageProps} />
      </GameState>
    </ModalState>
  );
}

export default MyApp;
