import React from 'react'

const Header = () => {
  return (
    <header className="flex py-3 px-4 justify-between items-center border-b-[1px]">

    <div className="flex items-center relative">
      <img src="./coin.svg" alt="coin" height="40px" width="40px" />
      <div className="flex flex-col leading-3 relative top-0.5 ">
        <span>Flip A Coin</span>
        <span className="text-[8px]">By Hero'sHappy</span>
      </div>
    </div>

    <a className="bg-[#c30d82] hover:bg-pink-500  text-white font-semibold text-xs sm:text-sm md:text-lg  h-7 px-2 rounded-md sm:h-10 sm:px-4 sm:rounded-lg flex items-center justify-center " href="https://www.linkedin.com/in/priyanshu-yadav-7885291b6/" target='_blank'>Contact Me</a>

</header>
  )
}

export default Header
