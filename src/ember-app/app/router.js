import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-zapasnojj-postamat-получатель-l');
  this.route('i-i-s-zapasnojj-postamat-получатель-e',
  { path: 'i-i-s-zapasnojj-postamat-получатель-e/:id' });
  this.route('i-i-s-zapasnojj-postamat-получатель-e.new',
  { path: 'i-i-s-zapasnojj-postamat-получатель-e/new' });
  this.route('i-i-s-zapasnojj-postamat-посылка-l');
  this.route('i-i-s-zapasnojj-postamat-посылка-e',
  { path: 'i-i-s-zapasnojj-postamat-посылка-e/:id' });
  this.route('i-i-s-zapasnojj-postamat-посылка-e.new',
  { path: 'i-i-s-zapasnojj-postamat-посылка-e/new' });
  this.route('i-i-s-zapasnojj-postamat-точка-l');
  this.route('i-i-s-zapasnojj-postamat-точка-e',
  { path: 'i-i-s-zapasnojj-postamat-точка-e/:id' });
  this.route('i-i-s-zapasnojj-postamat-точка-e.new',
  { path: 'i-i-s-zapasnojj-postamat-точка-e/new' });
  this.route('i-i-s-zapasnojj-postamat-ячейка-l');
  this.route('i-i-s-zapasnojj-postamat-ячейка-e',
  { path: 'i-i-s-zapasnojj-postamat-ячейка-e/:id' });
  this.route('i-i-s-zapasnojj-postamat-ячейка-e.new',
  { path: 'i-i-s-zapasnojj-postamat-ячейка-e/new' });
});

export default Router;
