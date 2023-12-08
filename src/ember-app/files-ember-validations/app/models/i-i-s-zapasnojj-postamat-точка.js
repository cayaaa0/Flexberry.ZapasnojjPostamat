import {
  defineNamespace,
  defineProjections,
  Model as ТочкаMixin
} from '../mixins/regenerated/models/i-i-s-zapasnojj-postamat-точка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТочкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
