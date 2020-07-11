export const vibrate = (duration = 200) => {
  window.navigator.vibrate(duration);
};

export const randomize = list => {
  return list[Math.floor(Math.random() * list.length)];
};
