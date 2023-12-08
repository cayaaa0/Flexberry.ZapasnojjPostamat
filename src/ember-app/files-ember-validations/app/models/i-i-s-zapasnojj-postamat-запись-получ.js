import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьПолучMixin
} from '../mixins/regenerated/models/i-i-s-zapasnojj-postamat-запись-получ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьПолучMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
