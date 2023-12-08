import { Serializer as ПосылкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zapasnojj-postamat-посылка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПосылкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
