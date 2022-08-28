import React from "react";
import { Router } from "../src/routes/Router";
import GlobalState from "./context/GlobalState";

export default function App() {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}
