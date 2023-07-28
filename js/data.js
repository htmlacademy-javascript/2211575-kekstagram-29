const DESCRIPTION = [
  'Летняя фотография на фоне лесной тропинки',
  'ночная съемка',
  'ночной город',
  'спящий кот',
  'полезный завтрак',
  'хорошее завершение недели',
  'трудовые будни',
  'с друзьями на вечеринке',
  'утро начинается с чашечки кофе',
  'Падение Стены Мария',
  'завтрак в Starbucks'
];

const NAMES = [
  'Данил',
  'Екатерина',
  'Николай',
  'Илья',
  'Ярослав',
  'Владислав',
  'Валерия',
  'Александр',
  'Дмитрий',
  'Виктория',
  'Василиса',
  'Ксения',
  'Анна',
  'Павел',
  'Тимофей',
  'Артем',
  'Егор',
  'Семён',
  'Кира',
  'Максим',
  'Анна',
  'Мария',
  'Нина',
  'Константин',
  'Сергей',
  'Виктор',
  'Роман',
  'Елизавета',
  'Андрей',
  'Леви Аккерман'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

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

function randomMessage () {
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

export {DESCRIPTION, randomId, randomUrl, randomMessage, getRandomArrayElement, getRandomInteger};
