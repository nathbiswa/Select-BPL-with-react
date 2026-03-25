import { Suspense, useState } from "react";
import "./App.css";
import Navebar from "./Componets/Navebar";
import Hero from "./Componets/Hero";
import Players from "./Componets/Players/Players";

const playersFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = playersFetch();
  const [coin, setCoin]= useState(5000000)
  return (
    <>
      <Navebar coin={coin}></Navebar>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} ></Players>
      </Suspense>
    </>
  );
}

export default App;
