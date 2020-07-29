import React from "react";
import "./styles.css";
import { ReactQueryConfigProvider } from "react-query";

import PokemonPager from "./Pokemon";
const queryConfig = {
  sespense: true
};

export default function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <React.Suspense fallback={"ŁAdowanie..."}>
          <PokemonPager />
        </React.Suspense>
      </div>
    </ReactQueryConfigProvider>
  );
}
