import { atom } from 'recoil';

export const selectedCoinState = atom({
  key: 'selectedCoinState',
  default: 'virtual',
});
