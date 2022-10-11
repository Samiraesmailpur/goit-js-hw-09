import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
player.on("play", function () {
  console.log("played the video!");
});
player.on("timeupdate", throttle(onPlay, 1000));
function onPlay(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
}
setCurrentTime();
function setCurrentTime() {
  if (!localStorage.getItem("videoplayer-current-time")) {
    return;
  }
  player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}
