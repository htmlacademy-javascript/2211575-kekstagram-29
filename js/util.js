import {NAMES, COMMENTS, getRandomInteger, getRandom} from './data.js';

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
