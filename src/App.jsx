import "./App.css";
import React, { useRef, useState } from "react";
import EventDay from "./components/EventDay";
import EventTimer from "./components/EventTimer";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { Player, BigPlayButton } from "video-react";
import Video from "./assets/event-page.mp4";
import Guruji from "./assets/event1.jpeg";
import Poster from "./assets/guruji-poster.png";
import "../node_modules/video-react/dist/video-react.css";

function App() {
  const eventDate = "2023-02-17T00:00:00";

  const playerRef = useRef(null);
  const [muted, setMuted] = useState(false);

  const handleMute = () => {
    setMuted(!muted);
    playerRef.current.muted = !muted;
  };

  return (
    <div className="App">
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url(${Guruji})`,
          // opacity: 0.5,
        }}
      >
        <div className="">
          <div className="navbar p-[20px] flex items-center justify-center">
            <a
              href="https://docs.google.com/forms/d/1ij0TlkxRLtdiqhoiIOoBUtVizl2zYh6kk6N3Zm0UYnU/edit"
              className="px-5 py-2 bg-red-600 shadow-lg"
            >
              Register Now
            </a>
          </div>
          <div className="title p-[20px] bg-black opacity-60">
            <h2 className="text-[#EFA506] font-normal text-[22px] tracking-[1px] leading-[41.8px] ">
              Are you <span className="text-[#04ABEE]">ready</span> to attend?
            </h2>
            <h1 className="font-black text-[65px] max-[410px]:text-[50px] max-[360px]:text-[40px] text-[rgb(255,255,255)]">
              Jambh Yuva{" "}
              <span className="border-b-8 border-[#FF2C55]">Mahotsav</span>{" "}
              <span className="text-[#EFA506]">2</span>
              <span className="text-[#FF2C55]">0</span>
              <span>2</span>
              <span className="text-[#04ABEE]">3</span>
            </h1>
            <div className="flex justify-between max-w-lg mt-5">
              <div className="flex items-center mt-[1rem]">
                <div className="mr-2">
                  <IoLocationSharp />
                </div>
                <div>
                  <h4 className="font-black text-[17px] text-[#EFA506]">
                    Lalasar Sathari Dham
                  </h4>
                </div>
              </div>
              <div className="flex items-center mt-[1rem]">
                <div className="mr-2">
                  <FaCalendarAlt />
                </div>
                <h4 className="font-black text-[17px] text-[#EFA506]">
                  17th - 19th Feb, 2023
                </h4>
              </div>
            </div>
          </div>
          <EventTimer eventDate={eventDate} />
        </div>
      </div>
      <div className="w-100% h-100% -mt-[20px] m-auto">
        <Player
          ref={playerRef}
          autoPlay={false}
          src={Video}
          muted={muted}
          // className="no-padding-top"
          poster={Poster}
        >
          <BigPlayButton position="center" />
        </Player>
        {/* <button onClick={handleMute}>{muted ? "Unmute" : "Mute"}</button>
        <button onClick={() => playerRef.current.pause()}>Pause</button> */}
      </div>
      <EventDay />
    </div>
  );
}

export default App;
