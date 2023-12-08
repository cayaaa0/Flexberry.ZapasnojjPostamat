import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьПолучMixin
} from '../mixins/regenerated/models/i-i-s-zapasnojj-postamat-запись-получ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьПолучMixin, Validations, {
});

defineProjections(Model);

export default Model;
