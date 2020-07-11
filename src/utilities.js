export const vibrate = (duration = 400) => {
  return window.navigator.vibrate(duration);
};

export const randomize = list => {
  return list[Math.floor(Math.random() * list.length)];
};
