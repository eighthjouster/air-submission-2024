'use client';

import { useEffect, useState } from "react";
import { fetchAssets } from "./services/fetchAssets";


const initialState = {
  data: '0'
};

export default function Home() {
  const [state, stateState] = useState(initialState);

  const { data: helloMessage } = state;

  useEffect(() => {
    const doFetch = async () => {
      const response: string | void = await fetchAssets();
      stateState({
        ...state,
        data: response,
      });
    }
    doFetch();
  }, []);

  return <main>Fetch test: { helloMessage }</main>;
}
