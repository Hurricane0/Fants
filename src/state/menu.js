export const modes = [
  {
    id: 1,
    title: process.env.REACT_APP_ENV === 'brf' ? 'BRF' : 'DEFAULT',
    src:
      'https://res.cloudinary.com/dygwe02oe/image/upload/v1594319964/dice_fjjm3r.png',
    link: '/fants',
  },
  {
    id: 2,
    title: 'Квест',
    src:
      'https://res.cloudinary.com/dygwe02oe/image/upload/v1594319975/7b8717630942d7fb84ae3c74b0602c0f-heart-logo-minimalism-by-vexels_kkjcmx.png',
    link: '/quests',
  },
  {
    id: 3,
    title: 'Позы',
    src:
      'https://res.cloudinary.com/dygwe02oe/image/upload/v1594319946/4953_mufbam.png',
    link: '/poses',
  },
];
