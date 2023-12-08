import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номерПост: DS.attr('number'),
  точка: DS.belongsTo('i-i-s-zapasnojj-postamat-точка', { inverse: 'постамат', async: false }),
  записьПолуч: DS.hasMany('i-i-s-zapasnojj-postamat-запись-получ', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПост: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-постамат.validations.номерПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  точка: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-постамат.validations.точка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьПолуч: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-постамат.validations.записьПолуч.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-zapasnojj-postamat-постамат', {
    номерПост: attr('Номер постамата', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    записьПолуч: hasMany('i-i-s-zapasnojj-postamat-запись-получ', 'Запись о получении', {
      датаПолуч: attr('Дата получения', { index: 0 }),
      времяПолуч: attr('Время получения', { index: 1 }),
      ячейка: belongsTo('i-i-s-zapasnojj-postamat-ячейка', 'Ячейка', {
        номерЯчейки: attr('Номер ячейки', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'номерЯчейки' }),
      посылка: belongsTo('i-i-s-zapasnojj-postamat-посылка', 'Посылка', {
        номПосылки: attr('Номер посылки', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'номПосылки' })
    })
  });
};
