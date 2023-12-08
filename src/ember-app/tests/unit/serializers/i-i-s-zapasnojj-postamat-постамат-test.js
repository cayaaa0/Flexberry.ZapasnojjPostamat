import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zapasnojj-postamat-постамат', 'Unit | Serializer | i-i-s-zapasnojj-postamat-постамат', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-zapasnojj-postamat-постамат',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-zapasnojj-postamat-статус-ячейк',
    'transform:i-i-s-zapasnojj-postamat-статусы',

    'model:i-i-s-zapasnojj-postamat-запись-получ',
    'model:i-i-s-zapasnojj-postamat-получатель',
    'model:i-i-s-zapasnojj-postamat-постамат',
    'model:i-i-s-zapasnojj-postamat-посылка',
    'model:i-i-s-zapasnojj-postamat-точка',
    'model:i-i-s-zapasnojj-postamat-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
