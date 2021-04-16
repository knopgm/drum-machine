import React, { useEffect } from "react";

import { DrumPad } from "./components/DrumPad/DrumPad";
import { Head } from "./components/Head/Head";
import { Footer } from "./components/Footer/Footer";

import "./style.scss";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bgColors = [
  "#689F38",
  "#FF4081",
  "#7B1FA2",
  "#536DFE",
  "#FBC02D",
  "#03A9F4",
  "#E64A19",
  "#AFB42B",
  "#FFA000",
];
const bgColorslight = [
  "rgb(104, 159, 56, 0.5)",
  "rgb(255, 64, 129, 0.5)",
  "rgb(123, 31, 162, 0.5)",
  "rgb(83, 109, 254, 0.5)",
  "rgb(251, 192, 45, 0.5)",
  "rgb(3, 169, 244, 0.5)",
  "rgb(230, 74, 25, 0.5)",
  "rgb(175, 180, 43, 0.5)",
  "rgb(255, 160, 0, 0.5)",
];

export function App() {
  return (
    <>
      <Head />
      <div className="drum-pads">
        {bankOne.map((item, index) => {
          console.log({ item, index, bgColors });
          return (
            <DrumPad
              key={item.keyTrigger}
              keyCode={item.keyCode}
              label={item.keyTrigger}
              audioSrc={item.url}
              bgColor={bgColors[index]}
              bgColorslight={bgColorslight[index]}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
