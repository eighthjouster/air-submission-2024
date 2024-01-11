'use client';

import { useEffect, useState } from "react";
import { fetchBoard } from "./services/fetchBoard";

const initialState = {
  data: '0'
};

export default function Home() {
  const [state, stateState] = useState(initialState);

  const { data: helloMessage } = state;

  useEffect(() => {
    const doFetch = async () => {
      const response: string | void = await fetchBoard();
      stateState({
        ...state,
        data: response,
      });
    }
    doFetch();
  }, []);

  return <main>Fetch test: { helloMessage }</main>;
}
