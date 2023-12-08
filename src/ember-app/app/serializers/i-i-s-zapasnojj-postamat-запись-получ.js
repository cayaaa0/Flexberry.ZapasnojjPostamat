import { Serializer as ЗаписьПолучSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zapasnojj-postamat-запись-получ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьПолучSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
