import React, { useContext } from "react";
import { GameContext } from "../../Controller/GameContex";
import { ModalContext } from "../../Controller/ModalContext";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import BoardCard from "./BoardCard";
import Rest from "../icons/Rest";

const Board = () => {
  const { showModal, setModalMode } = useContext(ModalContext);

  const handleRestart = () => {
    showModal();
    setModalMode("start");
  };

  const { squares, winner, winnerLine, xnext, ties, activeUser, playMode } =
    useContext(GameContext);

  const checkUser = (user) => {
    if (playMode === "cpu") {
      if (user === activeUser) {
        return "(you)";
      } else {
        return "(cpu)";
      }
    }
  };

  return (
    <div className="board">
      <div className="board__header">
        <div>
          <Xicon />
          <Oicon />
        </div>
        <div className="board__turn">
          {!xnext ? (
            <Xicon color="light" size="sm" />
          ) : (
            <Oicon color="light" size="sm" />
          )}
          turn
        </div>
        <div>
          <button className="btn btn-sm board__restart" onClick={handleRestart}>
            <Rest />{" "}
          </button>
        </div>
      </div>
      {/* <BoardCard user="x" active={true} /> */}
      <div className="board__body">
        {squares.map((sq, ix) => (
          <BoardCard
            key={ix}
            user={sq}
            index={ix}
            active={winner && winnerLine && winnerLine.includes(ix)}
          />
        ))}
      </div>
      <div className="board__footer">
        <div className="card bg-blue">
          <p className="text-light">x {checkUser("x")}</p>
          <strong className="text-2xl"> {ties.x} </strong>
        </div>
        <div className="card bg-light">
          <p className="text-light">Games Round</p>
          <strong className="text-2xl"> {ties.x + ties.o} </strong>
        </div>
        <div className="card bg-yellow">
          <p className="text-light">o {checkUser("o")}</p>
          <strong className="text-2xl"> {ties.o}</strong>
        </div>
      </div>
    </div>
  );
};

export default Board;
