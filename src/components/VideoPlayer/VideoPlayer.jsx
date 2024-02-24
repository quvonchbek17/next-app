import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { GoUnmute, GoMute } from "react-icons/go";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import style from "./VideoPlayer.module.scss";

const VideoPlayer = ({customStyle}) => {
  let videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  let videoPlayer = useRef();
  let [isPlay, setIsPlay] = useState(false);
  let [isMute, setIsMute] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // video play and pause
  const playAndPauseVideo = () => {
    setIsPlay(!isPlay);
    if (!isPlay) {
      videoPlayer.current.play();
    } else {
      videoPlayer.current.pause();
    }
  };

  // video mute and unmute
  const muteAndUnmuteVideo = () => {
    setIsMute(!isMute);
  };

  // vide next and prev
  const secondsPrev = () => {
    videoPlayer.current.currentTime -= 10
  }
  const secondsNext = () => {
    videoPlayer.current.currentTime += 10
  }

  // Video time and totaltime
  useEffect(() => {
    const player = videoPlayer.current;

    const updateTime = () => {
      setTime(player.currentTime);
    };

    const updateTotalTime = () => {
      setDuration(player.duration);
    };

    player.addEventListener("timeupdate", updateTime);
    player.addEventListener("loadedmetadata", updateTotalTime);

    return () => {
      player.removeEventListener("timeupdate", updateTime);
      player.removeEventListener("loadedmetadata", updateTotalTime);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={style.videoplayer} style={customStyle}>
      <video
        className={style.videoplayer_video}
        src={videoUrl}
        ref={videoPlayer}
        muted={isMute}
      ></video>
      <div className={style.videoplayer_videoControl}>
        <p>{formatTime(time)}/{formatTime(duration)}</p>
        <div className={style.videoplayer_playBtns}>
          <button onClick={secondsPrev} className={style.videoplayer_secondsPrevBtn}><TbPlayerTrackPrevFilled/></button>
          <button
            onClick={playAndPauseVideo}
            className={style.videoplayer_playBtn}
          >
            {isPlay ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={secondsNext} className={style.videoplayer_secondsNextBtn}><TbPlayerTrackNextFilled/></button>
        </div>
        <button
          onClick={muteAndUnmuteVideo}
          className={style.videoplayer_soundBtn}
        >
          {isMute ? <GoMute /> : <GoUnmute />}{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
