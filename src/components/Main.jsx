import { useEffect, useState,useMemo } from "react";

import { useRecoilValue } from "recoil";
import { selectedCoinState } from "../atoms.js";

import Heading from "./Heading.jsx";
import coinSound from "../assets/coinFlip.mp3";
import Article from "./Article";
import coinHeads10rs from "../assets/10coinback.webp";
import coinTails10rs from "../assets/10coinfront.webp";
import coinHeads2rs from "../assets/2coinback.webp";
import coinTails2rs from "../assets/2coinfront.webp";
import coinHeads5rs from "../assets/5coinback.webp";
import coinTails5rs from "../assets/5coinfront.webp";
import coinTails1rs from "../assets/1coinfront.webp";
import coinHeads1rs from "../assets/1coinback.webp";

const Main = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [head, setHead] = useState(0);
  const [tail, setTail] = useState(0);
  const [result, setResult] = useState("TAILS");
  const [display, setDisplay] = useState("");
  const selectedCoin = useRecoilValue(selectedCoinState);
  const [isCoinSelected, setIsCoinSelected] = useState(false)

  useEffect(()=>{
      setIsCoinSelected(selectedCoin !== "virtual");
      setResult('TAILS')
  },[selectedCoin]);

  const flipSound = new Audio(coinSound);
  flipSound.preload = "auto";

  const flipCoin = () => {
    flipSound.play();
    setIsFlipping(true);
    setDisplay("");

    setTimeout(() => {
      const randomResult = Math.random() < 0.5 ? "HEADS" : "TAILS";
      setResult(randomResult);
      setDisplay(randomResult);
      randomResult == "HEADS" ? setHead(head + 1) : setTail(tail + 1);
      setIsFlipping(false);
    }, 2980);
  };

  const { front, back } = useMemo(() => {
    switch (selectedCoin) {
      case "5rs":
        return { front: coinTails5rs, back: coinHeads5rs };
      case "1rs":
        return { front: coinHeads1rs, back: coinTails1rs };
      case "2rs":
        return { front: coinHeads2rs, back: coinTails2rs };
      default:
        return { front: coinTails10rs, back: coinHeads10rs };
    }
  }, [selectedCoin]);

  return (
    <main className="flex flex-col gap-10 border-b-2 py-10 pb-16 ">
      <Heading />
      <div className="hidden">
        <img src={coinTails10rs} alt="coin front" />
        <img src={coinHeads10rs} alt="coin back" />
        <img src={coinHeads2rs} alt="coin front" />
        <img src={coinTails2rs} alt="coin back" />
        <img src={coinHeads5rs} alt="coin front" />
        <img src={coinTails5rs} alt="coin back" />
        <img src={coinTails1rs} alt="coin front" />
        <img src={coinHeads1rs} alt="coin back" />
        </div>
      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-evenly w-60">
          <span>
            Heads: <strong>{head}</strong>
          </span>
          <span>
            Tails: <strong>{tail}</strong>
          </span>
        </div>

        <div
          className={`flip-coin cursor-pointer ${
            !isFlipping && "drop-shadow-xl shadow-2xl"
          } `}
          onClick={flipCoin}
        >
          <div className={`flip-coin-inner ${isFlipping && "flipping"}`}>
            {isFlipping ? (
              <>
                <div className="flip-coin-head ">
                  {isCoinSelected ? (
                    <img
                      src={front}
                      alt="coin front"
                      className="rounded-[50%] h-full transition-all duration-500 ease-in-out"
                    />
                  ) : (
                    <span className="border-2 border-white border-dotted h-[80%] w-[80%] rounded-[50%] flex justify-center items-center  font-bold text-3xl ">
                      HEADS
                    </span>
                  )}
                </div>
                <div className="flip-coin-tail">
                  {isCoinSelected ? (
                    <img
                      src={back}
                      alt="coin back"
                      className="rounded-[50%] h-full transition-all duration-500 ease-in-out"
                    />
                  ) : (
                    <span className="border-2 border-white border-dotted h-[80%] w-[80%] rounded-[50%] flex justify-center items-center  font-bold text-3xl ">
                      TAILS
                    </span>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className={`result-${result} `}>
                  {isCoinSelected ? (
                    <img
                      src={result === "TAILS" ? front : back}
                      alt="result"
                      className="rounded-[50%] h-full transition-all duration-500 ease-in-out"
                    />
                  ) : (
                    <span className="border-2 border-white border-dotted h-[80%] w-[80%] rounded-[50%] flex justify-center items-center  font-bold text-3xl ">
                      {result}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center pb-6">
        <button
          className="bg-[#c30d82] hover:bg-pink-500 text-white h-10 px-4 rounded-[5px] w-[150px] "
          onClick={flipCoin}
          disabled={isFlipping}
        >
          {isFlipping ? "Flipping..." : "Flip The Coin!"}
        </button>

        <p className="text-center">(Touch Coin or Press Button above)</p>
        <p className="bg-gray-200 text-blue-600 tracking-wider font-bold grid place-items-center h-10 px-4 rounded-[5px] w-[150px] ">
          {display}
        </p>
      </div>
      <Article />
    </main>
  );
};

export default Main;
