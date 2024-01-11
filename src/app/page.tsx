'use client';

import { useEffect, useState } from "react";
import Board from "./components/Board";
import fetchBoards, { BoardType } from "./services/fetchBoards";
import { fetchAssets } from "./services/fetchAssets";

const initialState: {
  boards: {
    list: BoardType[]
    pagination: any,
    total: number,
  }
} = {
  boards: {
    list: [],
    pagination: {},
    total: 0,
  },
};

export default function Home() {
  const [state, stateState] = useState(initialState);

  const { boards } = state;

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetchBoards();
      stateState({
        ...state,
        boards: response,
      });
    }
    doFetch();
  }, []);

  console.log('boards', boards);//__RP
  return <main>
    {boards?.list?.map(board => (
      <Board key={ board.id } />
    ))}
  </main>;
}
