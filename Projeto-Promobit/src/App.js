import react from 'react'
import GlobalStyle from "./globalStyle/GlobalStyle";
import { Router } from "./Routes/Router";

export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router/>
    </div>
  );
}


