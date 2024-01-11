'use client';

import { useEffect, useState } from "react";
import Board from "./components/Board";
import fetchBoards, { BoardResponseType, BoardType } from "./services/fetchBoards";
import { ClipType, fetchAssets } from "./services/fetchAssets";
import Asset from "./components/Asset";

const initialBoardState: {
  list: BoardType[]
  pagination: any,
  total: number,
} = {
  list: [],
  pagination: {},
  total: 0,
};

const initialAssetsState: {
  total: number
  clips: ClipType[]
  pagination: any
} = {
  clips: [],
  pagination: {},
  total: 0,
};

export default function Home() {
  const [boards, setBoards] = useState(initialBoardState);
  const [assets, setAssets] = useState(initialAssetsState);
  const [currentlySelectedBoard, setCurrentlySelectedBoard] = useState(-1);

  useEffect(() => {
    const doFetchBoards = async () => {
      const response = await fetchBoards();
      setBoards(response);
      setCurrentlySelectedBoard(0);
    }
    doFetchBoards();
  }, []);

  useEffect(() => {
    const doFetchAssets = async () => {
      if (boards?.list.length && (currentlySelectedBoard >= 0)) {
        const response = await fetchAssets();
        setAssets(response);
      }
    }
    doFetchAssets();
  }, [boards]);

  return <main>
    <span className="collapsible-name">Boards</span>
    <div className="assets-container">
      {boards?.list?.map(board => (
        <Board
          key={ board.id }
          {...board}
        />
      ))}
    </div>

    <span className="collapsible-name">Assets</span>
    <div className="assets-container">
      {assets?.clips?.map(clip => (
        <Asset
          key={ clip.id }
          {...clip} />
      ))}
    </div>
  </main>;
}
