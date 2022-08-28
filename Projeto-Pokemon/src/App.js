import React from "react";
import { Router } from '../src/routes/Router';
import GlobalState from "./context/GlobalState";
import GlobalStyle from "./globalStyle/GlobalStyle";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  );
}
