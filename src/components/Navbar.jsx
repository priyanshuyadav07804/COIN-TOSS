import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedCoinState } from '../atoms.js';

const Navbar = () => {
  const [selectedCoin, setSelectedCoin] = useRecoilState(selectedCoinState);

  return (
    <nav className="flex justify-center gap-4 sm:gap-10 md:gap-16 py-4 border-b-[1px] text-xs  text-[#d31c92] ">
      <button onClick={() => setSelectedCoin('virtual')} className={`px-3 h-4 md:text-sm border-r-[0px] line-clamp-1 ${selectedCoin === 'virtual' ? 'text-blue-700' : ''}`}>Virtual Coin</button>
      <button onClick={() => setSelectedCoin('10rs')} className={`pr-3 h-4 md:text-sm border-r-[1px] line-clamp-1  ${selectedCoin === '10rs' ? 'text-blue-700' : ''}`}>10 Rs Coin</button>
      <button onClick={() => setSelectedCoin('5rs')} className={`pr-3 h-4 md:text-sm border-r-[1px] line-clamp-1 ${selectedCoin === '5rs' ? 'text-blue-700' : ''}`}>5 Rs Coin</button>
      <button onClick={() => setSelectedCoin('1rs')} className={`pr-3 h-4 md:text-sm border-r-[1px] line-clamp-1 ${selectedCoin === '1rs' ? 'text-blue-700' : ''}`}>1 Rs Coin</button>
      <button onClick={() => setSelectedCoin('2rs')} className={`pr-3 h-4 md:text-sm border-r-[0px] line-clamp-1 ${selectedCoin === '2rs' ? 'text-blue-700' : ''}`}>2 Rs Coin</button>
    </nav>
  );
};

export default Navbar;
