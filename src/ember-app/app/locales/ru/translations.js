import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISZapasnojj_postamatПолучательLForm from './forms/i-i-s-zapasnojj-postamat-получатель-l';
import IISZapasnojj_postamatПосылкаLForm from './forms/i-i-s-zapasnojj-postamat-посылка-l';
import IISZapasnojj_postamatТочкаLForm from './forms/i-i-s-zapasnojj-postamat-точка-l';
import IISZapasnojj_postamatЯчейкаLForm from './forms/i-i-s-zapasnojj-postamat-ячейка-l';
import IISZapasnojj_postamatПолучательEForm from './forms/i-i-s-zapasnojj-postamat-получатель-e';
import IISZapasnojj_postamatПосылкаEForm from './forms/i-i-s-zapasnojj-postamat-посылка-e';
import IISZapasnojj_postamatТочкаEForm from './forms/i-i-s-zapasnojj-postamat-точка-e';
import IISZapasnojj_postamatЯчейкаEForm from './forms/i-i-s-zapasnojj-postamat-ячейка-e';
import IISZapasnojj_postamatЗаписьПолучModel from './models/i-i-s-zapasnojj-postamat-запись-получ';
import IISZapasnojj_postamatПолучательModel from './models/i-i-s-zapasnojj-postamat-получатель';
import IISZapasnojj_postamatПостаматModel from './models/i-i-s-zapasnojj-postamat-постамат';
import IISZapasnojj_postamatПосылкаModel from './models/i-i-s-zapasnojj-postamat-посылка';
import IISZapasnojj_postamatТочкаModel from './models/i-i-s-zapasnojj-postamat-точка';
import IISZapasnojj_postamatЯчейкаModel from './models/i-i-s-zapasnojj-postamat-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-zapasnojj-postamat-запись-получ': IISZapasnojj_postamatЗаписьПолучModel,
    'i-i-s-zapasnojj-postamat-получатель': IISZapasnojj_postamatПолучательModel,
    'i-i-s-zapasnojj-postamat-постамат': IISZapasnojj_postamatПостаматModel,
    'i-i-s-zapasnojj-postamat-посылка': IISZapasnojj_postamatПосылкаModel,
    'i-i-s-zapasnojj-postamat-точка': IISZapasnojj_postamatТочкаModel,
    'i-i-s-zapasnojj-postamat-ячейка': IISZapasnojj_postamatЯчейкаModel
  },

  'application-name': 'Zapasnojj_postamat',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Zapasnojj_postamat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zapasnojj_postamat',
          title: 'Zapasnojj_postamat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        постамат: {
          caption: 'Постамат',
          title: 'Постамат',
          'i-i-s-zapasnojj-postamat-точка-l': {
            caption: 'Расположение',
            title: 'Точка'
          },
          'i-i-s-zapasnojj-postamat-ячейка-l': {
            caption: 'Ячейка',
            title: 'Ячейка'
          }
        },
        получатель: {
          caption: 'Получатель',
          title: 'Получатель',
          'i-i-s-zapasnojj-postamat-получатель-l': {
            caption: 'Получатель',
            title: 'Получатель'
          },
          'i-i-s-zapasnojj-postamat-посылка-l': {
            caption: 'Посылка',
            title: 'Посылка'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-zapasnojj-postamat-получатель-l': IISZapasnojj_postamatПолучательLForm,
    'i-i-s-zapasnojj-postamat-посылка-l': IISZapasnojj_postamatПосылкаLForm,
    'i-i-s-zapasnojj-postamat-точка-l': IISZapasnojj_postamatТочкаLForm,
    'i-i-s-zapasnojj-postamat-ячейка-l': IISZapasnojj_postamatЯчейкаLForm,
    'i-i-s-zapasnojj-postamat-получатель-e': IISZapasnojj_postamatПолучательEForm,
    'i-i-s-zapasnojj-postamat-посылка-e': IISZapasnojj_postamatПосылкаEForm,
    'i-i-s-zapasnojj-postamat-точка-e': IISZapasnojj_postamatТочкаEForm,
    'i-i-s-zapasnojj-postamat-ячейка-e': IISZapasnojj_postamatЯчейкаEForm
  },

});

export default translations;
