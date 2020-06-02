import React, { useState, useEffect } from "react";
import AlertPopup from "./AlertAlertPopup";
import "../App.css";

const TicTacTable = () => {
  const [show, setShow] = useState(true);

  const [ticOX, setTicOX] = useState({
    current: "X",
    message: "Congrats!",
    numberOfPlayed: 0,
  });
  const [tictac, setTicTac] = useState([
    {
      id: 1,
      ch: "\0",
      isActive: false,
    },
    {
      id: 2,
      ch: "\0",
      isActive: false,
    },
    {
      id: 3,
      ch: "\0",
      isActive: false,
    },
    {
      id: 4,
      ch: "\0",
      isActive: false,
    },
    {
      id: 5,
      ch: "\0",
      isActive: false,
    },
    {
      id: 6,
      ch: "\0",
      isActive: false,
    },
    {
      id: 7,
      ch: "\0",
      isActive: false,
    },
    {
      id: 8,
      ch: "\0",
      isActive: false,
    },
    {
      id: 9,
      ch: "\0",
      isActive: false,
    },
  ]);

  const handleTTclick = (value) => {
    const filteredTic = tictac.filter((tic) => {
      if (tic.id === value && tic.ch === "\0") {
        if (ticOX.current === "X") {
          setTicOX({
            ...ticOX,
            current: "O",
            numberOfPlayed: ++ticOX.numberOfPlayed,
          });
          return (tic.ch = "X"), (tic.isActive = true);
        } else {
          setTicOX({
            ...ticOX,
            current: "X",
            numberOfPlayed: ++ticOX.numberOfPlayed,
          });
          return (tic.ch = "O"), (tic.isActive = true);
        }
      } else {
        return tic;
      }
    });
    //console.log(ticOX.numberOfPlayed )
    if (filteredTic.length !== 0) {
      setTicTac(filteredTic);
      checkWin();
    }
  };

  const checkWin = () => {
    //console.log('Checking... ')

    if (
      tictac[0].ch === tictac[1].ch &&
      tictac[0].ch === tictac[2].ch &&
      tictac[1].ch === tictac[2].ch &&
      tictac[0].ch !== "\0"
    ) {
      console.log("Winner 1... ", tictac[0].ch);
      setShow(false);
    } else if (
      tictac[3].ch === tictac[4].ch &&
      tictac[3].ch === tictac[5].ch &&
      tictac[4].ch === tictac[5].ch &&
      tictac[3].ch !== "\0"
    ) {
      console.log("Winner 2... ", tictac[3].ch);
      setShow(false);
    } else if (
      tictac[6].ch === tictac[7].ch &&
      tictac[6].ch === tictac[8].ch &&
      tictac[7].ch === tictac[8].ch &&
      tictac[6].ch !== "\0"
    ) {
      console.log("Winner 3... ", tictac[6].ch);
      setShow(false);
    } else if (
      tictac[0].ch === tictac[4].ch &&
      tictac[0].ch === tictac[8].ch &&
      tictac[4].ch === tictac[8].ch &&
      tictac[0].ch !== "\0"
    ) {
      console.log("Winner 4... ", tictac[0].ch);
      setShow(false);
    } else if (
      tictac[2].ch === tictac[4].ch &&
      tictac[2].ch === tictac[6].ch &&
      tictac[4].ch === tictac[6].ch &&
      tictac[2].ch !== "\0"
    ) {
      console.log("Winner 5... ", tictac[2].ch);
      setShow(false);
    } else if (
      tictac[1].ch === tictac[4].ch &&
      tictac[1].ch === tictac[7].ch &&
      tictac[4].ch === tictac[7].ch &&
      tictac[1].ch !== "\0"
    ) {
      console.log("Winner 6... ", tictac[1].ch);

      setShow(false);
    } else if (
      tictac[2].ch === tictac[5].ch &&
      tictac[2].ch === tictac[8].ch &&
      tictac[5].ch === tictac[8].ch &&
      tictac[2].ch !== "\0"
    ) {
      console.log("Winner 6... ", tictac[2].ch);
      setShow(false);
    } else if (
      tictac[0].ch === tictac[3].ch &&
      tictac[0].ch === tictac[6].ch &&
      tictac[3].ch === tictac[6].ch &&
      tictac[0].ch !== "\0"
    ) {
      console.log("Winner 6... ", tictac[0].ch);
      setShow(false);
    } else if (ticOX.numberOfPlayed === 9) {
      setTicOX({ ...ticOX, message: " Game Tied!" });
      setShow(false);
    }
  };

  //console.log(show)
  return (
    <>
      <table responsive="lg">
        <tbody>
          <tr>
            <td onClick={() => handleTTclick(1)} className="nonLine">
              {tictac[0].ch}
            </td>
            <td onClick={() => handleTTclick(2)} className="verticalLine">
              {tictac[1].ch}
            </td>
            <td onClick={() => handleTTclick(3)} className="nonLine">
              {tictac[2].ch}
            </td>
          </tr>

          <tr>
            <td onClick={() => handleTTclick(4)} className="horizontalLine">
              {tictac[3].ch}
            </td>
            <td
              onClick={() => handleTTclick(5)}
              className="verticalLine horizontalLine"
            >
              {tictac[4].ch}
            </td>
            <td onClick={() => handleTTclick(6)} className=" horizontalLine">
              {tictac[5].ch}
            </td>
          </tr>

          <tr>
            <td onClick={() => handleTTclick(7)} className="nonLine">
              {tictac[6].ch}
            </td>
            <td onClick={() => handleTTclick(8)} className="verticalLine">
              {tictac[7].ch}
            </td>
            <td onClick={() => handleTTclick(9)} className="nonLine">
              {tictac[8].ch}
            </td>
          </tr>
        </tbody>
      </table>
      {!show && <AlertPopup ticOX={ticOX} show={show} setShow={setShow} />}
    </>
  );
};

export default TicTacTable;
