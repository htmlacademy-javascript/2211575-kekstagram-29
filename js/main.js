import {DESCRIPTION} from './data.js';
import {getRandomInteger,randomId, randomUrl, getRandomArrayElement, getRandomMessage} from './util.js';


const descriptionPhoto = () => ({
  id: randomId(),
  url: `photos/${randomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  сomments: getRandomMessage(),

});

const photo = Array.from({length:25}, descriptionPhoto);

console.log(photo);
