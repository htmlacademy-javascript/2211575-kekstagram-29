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

function getRandomId (min, max) {
  let id = min;

  return function() {
    if (id <= max) {
      return id++;
    }
  };
}
function getRandomUrl (min, max) {
  let url = min;

  return function() {
    if (url <= max) {
      return url++;
    }
  };
}
function getRandomCommentId (min, max) {
  let CommentId = min;

  return function() {
    if (CommentId <= max) {
      return CommentId++;
    }
  };
}


const randomId = getRandomId(1, 25);
const randomUrl = getRandomUrl(1, 25);
const randomCommentId = getRandomCommentId(1, 10000000);

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

const descriptionPhoto = () => ({
  id: randomId(),
  url: `photos/${randomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  сomments: getRandomMessage(),

});

const photo = Array.from({length:25}, descriptionPhoto);

console.log(photo);
