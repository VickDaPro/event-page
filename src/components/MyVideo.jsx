import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

function MyVideo() {
  const playerRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(true);

  const handleMute = () => {
    setMuted(!muted);
  };

  const handlePause = () => {
    setPlaying(!playing);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url="src/assets/event-page.mp4"
        playing={playing}
        controls={false}
        muted={muted}
        width="100%"
        height="100%"
      />
      <button onClick={handleMute}>{muted ? "Unmute" : "Mute"}</button>
      <button onClick={handlePause}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
}

export default MyVideo;
