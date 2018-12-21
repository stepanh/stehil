/**
 * Store total time spent on this site over multiple sessions
 * 
 */

const LIFE_MS = 100 * 365 * 24 * 60 * 60 * 1000;
let timeHereInitial: number = 0;
let timeStart: number;

export const initTimeTrackerBrowser = () => {
  try {
    const ms = localStorage.getItem('timeHereMs');
    if (ms) {
      timeHereInitial = parseInt(ms, 10);
    }
    window.addEventListener('beforeunload', (event) => {  
      // event.preventDefault();
      localStorage.setItem('timeHereMs', getTotalTimeHere().toString());
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // save state and stop counting
        timeHereInitial = getTotalTimeHere();
        timeStart = NaN;
      } else {
        timeStart = new Date().getTime();
      }
    });
  } catch (e) {
    console.error('initTimeHere', e);
  }
};

const getTotalTimeHere = () => {
  if (isNaN(timeStart)) {
    // init here to have same initial state on both server and client
    timeStart = new Date().getTime();
    return 0;
  }

  return timeHereInitial + new Date().getTime() - timeStart;
};

export const getLifeFraction = () => {
  return (getTotalTimeHere() / LIFE_MS).toFixed(9);
};