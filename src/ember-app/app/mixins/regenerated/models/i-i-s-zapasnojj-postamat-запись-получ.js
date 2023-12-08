import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПолуч: DS.attr('string'),
  датаПолуч: DS.attr('date', { defaultValue() { return new Date(); } }),
  посылка: DS.belongsTo('i-i-s-zapasnojj-postamat-посылка', { inverse: null, async: false }),
  ячейка: DS.belongsTo('i-i-s-zapasnojj-postamat-ячейка', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-zapasnojj-postamat-постамат', { inverse: 'записьПолуч', async: false })
});

export let ValidationRules = {
  времяПолуч: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-запись-получ.validations.времяПолуч.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаПолуч: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-запись-получ.validations.датаПолуч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-запись-получ.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-запись-получ.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-zapasnojj-postamat-запись-получ.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьПолучE', 'i-i-s-zapasnojj-postamat-запись-получ', {
    датаПолуч: attr('Дата получения', { index: 0 }),
    времяПолуч: attr('Время получения', { index: 1 }),
    ячейка: belongsTo('i-i-s-zapasnojj-postamat-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номерЯчейки' }),
    посылка: belongsTo('i-i-s-zapasnojj-postamat-посылка', 'Посылка', {
      номПосылки: attr('Номер посылки', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номПосылки' })
  });
};
