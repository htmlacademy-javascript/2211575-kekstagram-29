import {DESCRIPTION, randomId, randomUrl, randomMessage, getRandomArrayElement, getRandomInteger} from './data.js';

const descriptionPhoto = () => ({
  id: randomId(),
  url: `photos/${randomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  сomments: randomMessage(),

});

const photo = Array.from({length:25}, descriptionPhoto);

export {photo};
