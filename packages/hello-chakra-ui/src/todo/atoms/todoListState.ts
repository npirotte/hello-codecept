import { atom } from "recoil";

export interface ITodo {
  title: string;
}

export const todoListState = atom<ITodo[]>({
  key: 'todoListState',
  default: [],
});