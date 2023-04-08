import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Characters.js";

function App() {
  return (
    <section>
      {Characters.map((Character, index) => {
        console.log(Character);
        const { Imię, Rasa, Klasa } = Character;
        return <Char Character={Character} key={index} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
