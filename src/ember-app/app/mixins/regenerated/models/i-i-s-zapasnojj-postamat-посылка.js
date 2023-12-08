import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПост: DS.attr('number'),
  номерЯчейки: DS.attr('number'),
  номПосылки: DS.attr('number'),
  статус: DS.attr('i-i-s-zapasnojj-postamat-статусы'),
  получатель: DS.belongsTo('i-i-s-zapasnojj-postamat-получатель', { inverse: null, async: false })
});

export let ValidationRules = {
  номерПост: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-посылка.validations.номерПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-посылка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номПосылки: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-посылка.validations.номПосылки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  получатель: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-посылка.validations.получатель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-zapasnojj-postamat-посылка', {
    номПосылки: attr('Номер посылки', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    номерПост: attr('Номер постамата', { index: 2 }),
    номерЯчейки: attr('Номер ячейки', { index: 3 }),
    получатель: belongsTo('i-i-s-zapasnojj-postamat-получатель', 'Получатель', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПосылкаL', 'i-i-s-zapasnojj-postamat-посылка', {
    номПосылки: attr('Ном посылки', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    номерПост: attr('Номер постамата', { index: 2 }),
    номерЯчейки: attr('Номер ячейки', { index: 3 }),
    получатель: belongsTo('i-i-s-zapasnojj-postamat-получатель', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
