import { useState } from 'react'
import Heading from './Heading.jsx'
import coinSound from '../assets/coinFlip.mp3'
import Article from './Article';

const Main = () => {
    const [isFlipping, setIsFlipping] = useState(false);
    const [head, setHead] = useState(0);
    const [tail, setTail] = useState(0);
    const [result, setResult] = useState("HEADS");
  
    const flipCoin = () => {
      setIsFlipping(true);
      new Audio(coinSound).play();
  
      setTimeout(() => {
        const randomResult = Math.random() < 0.5 ? "HEADS" : "TAILS";
        setResult(randomResult);
        randomResult == "HEADS" ? setHead(head + 1) : setTail(tail + 1);
        setIsFlipping(false);
      }, 3000);
    };

  return (
    <main className="flex flex-col gap-10 border-b-2 py-10 pb-16 ">
    <Heading/>
    <div className="flex flex-col items-center gap-10">
      <div className="flex justify-evenly w-60">
        <span>
          Heads: <strong>{head}</strong>
        </span>
        <span>
          Tails: <strong>{tail}</strong>
        </span>
      </div>

      <div className="flip-coin cursor-pointer" onClick={flipCoin}>
        <div className={`flip-coin-inner ${isFlipping ? "flipping" : ""}`}>
          {isFlipping ? (
            <>
              <div className="flip-coin-head">
                <span className="border-2 border-white border-dotted h-[80%] w-[80%] rounded-[50%] flex justify-center items-center  font-bold text-3xl ">
                  HEADS
                </span>
              </div>

              <div className="flip-coin-tail">
                <span className="border-2 border-white border-dotted h-[80%] w-[80%] rounded-[50%] flex justify-center items-center font-bold text-3xl  ">
                  TAILS
                </span>
              </div>
            </>
          ) : (
            <>
              <div className={`result-${result}`}>
                <span className="border-2 border-white border-dotted h-[80%] w-[80%] rounded-[50%] flex justify-center items-center  font-bold text-3xl ">
                  {result}
                </span>
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

      <p>(Touch Coin or Press Button above)</p>
    </div>
    <Article/>
  </main>
  )
}

export default Main
