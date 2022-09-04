import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/home/hero/hero";
import { WhyCrappo } from "./components/home/why-crappo/why-crappo";
import { Trade } from "./components/home/trade/trade";
import { Footer } from "./components/home/footer/foooter";
import { Statistics } from "./components/home/statistics/statistics";
import { Cta } from "./components/home/cta/cta";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
    <div className="bg-darkNavyBlue">
      <Header />
      <Hero />
      <WhyCrappo />
      <Trade />
      <Statistics />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
