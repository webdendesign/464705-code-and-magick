'use strict';

(function () {
  window.backand = {
    load: function (onLoad, onError) {

    },
    save: function (data, onLoad, onError) {

    }
  }
})();

var onError = function (message) {
  console.error(message);
};

var onLoad = function (data) {
  var animals = data;

  console.log(animals);
};

var xhr = new XMLHttpRequest();

xhr.responseType = 'json';

xhr.addEventListener('load', function (evt) {
  var error;
  switch (xhr.status) {
    case 200:
      onSuccess(xhr.response);
      break;

    case 400:
      error = 'Неверный запрос';
      break;
    case 401:
      error = 'Пользователь не авторизован';
      break;
    case 404:
      error = 'Ничего не найдено';
      break;

    default:
      error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
  }

  if (error) {
    onError(error);
  }

});

xhr.addEventListener('error', function () {
  onError('Произошла ошибка соединения');
});

xhr.addEventListener('timeout', function () {
  onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
});


xhr.timeout = 1000;

xhr.open('GET', 'https://js.dump.academy/code-and-magick/data');

xhr.send();

