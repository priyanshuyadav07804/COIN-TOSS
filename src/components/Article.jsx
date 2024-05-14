import React from 'react'

const Article = () => {
  return (
    <article className="border-t-2 grid place-items-center pt-16 space-y-16" >
    <div className="max-w-[650px] sm:max-w-[800px] px-10 flex flex-col space-y-2 ">
      <h1 className=" font-bold text-4xl font-[sans-serif] ">
        Flip a Coin online
      </h1>
      <p className="text-slate-700 text-sm tracking-wide">
        You've probably flipped a coin at some point in your life to make a
        big decision, or maybe you've just used it to decide small things in
        your daily life. Toss the coin online is a tool or app that allows you
        to flip a virtual coin in the air as if you were flipping a real coin.
        You can leave it up to chance to make decisions just by choosing which
        option will go for heads and which for tails. Now you know, if you
        want to flip a coin to decide something but you don't have any in your
        pockets, you can flip an online or virtual coin that is always
        available within the tools that we offer you from Hero'shappy group.
      </p>
    </div>
    <div className="max-w-[650px] sm:max-w-[800px] px-10 flex flex-col space-y-2 ">
      <h1 className=" font-bold text-4xl font-[sans-serif] ">
      In which cases can I use Heads or Tails?
      </h1>
      <div className="text-slate-700 text-sm tracking-wide">
      <span>You can use this app to flip a coin on many occasions, here are some ideas:</span>
        <ul className="list-disc text-lg px-8 pt-4">
          <li>You can use online coin tossing to decide who will do the household chores.</li>
          <li>You can decide who goes first in a game by tossing a virtual coin.</li>
          <li>Flip the coin can help you decide whether or not to buy that item you've been thinking</li>
        </ul>
      </div>
    </div>

    </article>
  )
}

export default Article
