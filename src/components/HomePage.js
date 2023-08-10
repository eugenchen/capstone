import React from "react";
import Main from "./Main";
import About from "./About";
import Reservations from "./Reservations";

export default function Homepage() {
  return (
    <>
      <main>
        <Main />
        <About />
        <Reservations />
      </main>
    </>
  );
}
