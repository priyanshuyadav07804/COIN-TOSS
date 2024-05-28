import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedCoinState } from '../atoms.js';

const Navbar = () => {
  const [selectedCoin, setSelectedCoin] = useRecoilState(selectedCoinState);

  return (
    <nav className="flex justify-center sm:gap-10 md:gap-28 py-4 border-b-[1px] text-xs  text-[#d31c92]">
      <button onClick={() => setSelectedCoin('virtual')} className={`px-3 h-5 md:text-sm border-r-[0px] ${selectedCoin === 'virtual' ? 'text-blue-700' : ''}`}>Virtual Coin</button>
      <button onClick={() => setSelectedCoin('10rs')} className={`px-3 h-5 md:text-sm border-r-[1px]  ${selectedCoin === '10rs' ? 'text-blue-700' : ''}`}>10 Rs Coin</button>
      <button onClick={() => setSelectedCoin('5rs')} className={`px-3 h-5 md:text-sm border-r-[1px] ${selectedCoin === '5rs' ? 'text-blue-700' : ''}`}>5 Rs Coin</button>
      <button onClick={() => setSelectedCoin('1rs')} className={`px-3 h-5 md:text-sm border-r-[1px] ${selectedCoin === '1rs' ? 'text-blue-700' : ''}`}>1 Rs Coin</button>
      <button onClick={() => setSelectedCoin('2rs')} className={`px-3 h-5 md:text-sm border-r-[0px] ${selectedCoin === '2rs' ? 'text-blue-700' : ''}`}>2 Rs Coin</button>
    </nav>
  );
};

export default Navbar;
