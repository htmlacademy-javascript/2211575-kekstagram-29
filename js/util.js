import {NAMES, COMMENTS} from './data.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandom (min, max) {
  let id = min;

  return function() {
    if (id <= max) {
      return id++;
    }
  };
}

const randomId = getRandom(1, 25);
const randomUrl = getRandom(1, 25);
const randomCommentId = getRandom(1, 10000000);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function getRandomMessage () {
  const quantity = getRandomInteger(1, 2);
  const comment = [];
  if (quantity === 1) {
    comment[0] = {
      id: randomCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES)
    };
    return comment;
  }else {
    comment[0] = {
      id: randomCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES)
    };
    comment[1] = {
      id: randomCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES)
    };
    return comment;
  }
}

export {getRandomInteger,randomId, randomUrl, getRandomArrayElement, getRandomMessage};
