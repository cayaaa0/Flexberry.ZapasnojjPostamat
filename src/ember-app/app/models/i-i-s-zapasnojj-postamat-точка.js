import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТочкаMixin
} from '../mixins/regenerated/models/i-i-s-zapasnojj-postamat-точка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТочкаMixin, Validations, {
});

defineProjections(Model);

export default Model;
