import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусыEnum from '../enums/i-i-s-zapasnojj-postamat-статусы';

export default FlexberryEnum.extend({
  enum: СтатусыEnum,
  sourceType: 'IIS.Zapasnojj_postamat.Статусы'
});
