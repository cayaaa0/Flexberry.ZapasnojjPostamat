import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусЯчейкEnum from '../enums/i-i-s-zapasnojj-postamat-статус-ячейк';

export default FlexberryEnum.extend({
  enum: СтатусЯчейкEnum,
  sourceType: 'IIS.Zapasnojj_postamat.СтатусЯчейк'
});
