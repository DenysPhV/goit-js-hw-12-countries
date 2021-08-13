import '@pnotify/core/dist/PNotify.css';
import '@pnotify/desktop/dist/PNotifyDesktop';
import '@pnotify/core/dist/BrightTheme.css';
import { alert } from '@pnotify/core/dist/PNotify';

import render from './render';
// подумать над рефракторингом
const info = {
  showResult(data) {
    const countriesCount = data.length;

    if (countriesCount > 10) {
      const text = 'Найдено слишком много совпадений';
      const type = 'info';

      alert({
        type: `${type}`,
        text: `${text}`,
        mode: 'light',
        delay: 2000,
        sticker: false,
        maxTextHeight: null,
        addClass: 'notification',
      });
      //   console.log(text);
      //   console.log(type);

      //   showNotification(text, type);
    } else if (countriesCount >= 2 && countriesCount <= 10) {
      render.countriesItem(data);
    } else if (countriesCount === 1) {
      render.country(data);
    } else {
      const text = 'Совпадений не найдено';
      const type = 'error';

      alert({
        type: `${type}`,
        text: `${text}`,
        mode: 'light',
        delay: 2000,
        sticker: false,
        maxTextHeight: null,
        addClass: 'notification',
      });

      //   console.log(text);
      console.log(type);

      //   showNotification(text, type);
    }
  },

  //   showNotification(text, type) {
  //     alert({
  //       type: `${type}`,
  //       text: `${text}`,
  //       mode: 'light',
  //       delay: 2000,
  //       sticker: false,
  //       maxTextHeight: null,
  //       addClass: 'notification',
  //     });
  //   },
};

export default info;
