import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const vimeoPlayer = new Player(iframe);
const lsKey = 'videoplayer-current-time';

vimeoPlayer.on(
  'timeupdate',
  throttle(function (e) {
    const currentTime = e.seconds;
    localStorage.setItem(lsKey, currentTime);
  }, 1000)
);

const lsTime = localStorage.getItem(lsKey);

// додав від себе, щоб перегляд починався на 3 секунди раніше від того місця, де зупинився

if (lsTime > 3) {
  vimeoPlayer.setCurrentTime(lsTime - 3);
}
