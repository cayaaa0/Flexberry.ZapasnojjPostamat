import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zapasnojj-postamat-ячейка', 'Unit | Model | i-i-s-zapasnojj-postamat-ячейка', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
