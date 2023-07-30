import {DESCRIPTION, randomMessage, getRandomArrayElement, getRandomInteger} from './data.js';

const descriptionPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  сomments: randomMessage(),

});


const photo = () => Array.from(
  {length:25},
  (_, pictureIndex) => descriptionPhoto(pictureIndex + 1)
);
export {photo, descriptionPhoto};
