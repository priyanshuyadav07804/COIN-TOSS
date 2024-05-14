import React from 'react'

const Heading = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center px-10">
    <h1 className=" font-bold text-5xl font-[sans-serif] ">
      Heads or Tails
    </h1>
    <p className=" max-w-[650px] text-lg font-sans text-slate-500 tracking-wide text-center">
      Flip a coin online with this virtual coin flipper, it's easy and
      free.
    </p>
  </div>
  )
}

export default Heading
