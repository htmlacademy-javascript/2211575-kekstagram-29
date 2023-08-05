import { closeForm } from './form-validate.js';
import { uploadData } from './fetch.js';
import { isEscapeKey } from './util.js';

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const formUploadMessage = document.querySelector('.img-upload__form');


const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closePopup();
  }
};

const onPopupClick = (evt) => {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  if (popup && !evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    evt.preventDefault();
    closePopup();
  }
};

function closePopup () {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  if (popup) {
    popup.remove();
  }
  document.removeEventListener('keydown', onEscKeydown);
}


const showMessage = (message) => {
  message.addEventListener('click', onPopupClick);
  document.body.appendChild(message);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => {
  const messageFragment = errorMessage.cloneNode(true);
  const errorButton = messageFragment.querySelector('.error__button');

  showMessage(messageFragment);

  errorButton.addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    closePopup();
    errorButton.removeEventListener('click', onEscKeydown);
  });
  document.addEventListener('keydown',{once: true}, (evt) => {
    if (isEscapeKey(evt)) {
      messageFragment.remove();

      document.querySelector('.img-upload__overlay').classList.remove('hidden');

      document.removeEventListener('keydown', onEscKeydown);
    }
  });
};

const showSuccessMessage = () => {
  const messageFragment = successMessage.cloneNode(true);
  const successButton = messageFragment.querySelector('.success__button');

  showMessage(messageFragment);

  successButton.addEventListener('click', () => {
    closeForm();
    closePopup();
    successButton.removeEventListener('click', onEscKeydown);
  });
};

const onSuccess = ()=> {
  closeForm();
  showSuccessMessage();
};

const errorAlert = () => {
  showErrorMessage();
};

const onFormUploadMessageSubmit = (evt) => {
  evt.preventDefault();

  const submitButton = document.querySelector('.img-upload__submit');
  submitButton.disabled = true;

  uploadData(() => {
    onSuccess();
    submitButton.disabled = false;
  }, () => {
    errorAlert();
    submitButton.disabled = false;
  },'POST', new FormData(evt.target));
};

formUploadMessage.addEventListener('submit', onFormUploadMessageSubmit);
