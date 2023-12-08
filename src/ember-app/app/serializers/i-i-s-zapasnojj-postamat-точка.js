import { Serializer as ТочкаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zapasnojj-postamat-точка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТочкаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
