
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThubmnail = ({сomments, description, likes, url}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__comments').textContent = сomments.length;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__img').src = url;
  return thumbnail;
};


const renderThubmnail = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThubmnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};


export {renderThubmnail};
