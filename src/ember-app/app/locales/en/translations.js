import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Zapasnojj_postamat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zapasnojj_postamat',
          title: 'Zapasnojj_postamat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
