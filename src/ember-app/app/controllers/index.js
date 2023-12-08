import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.постамат.caption'),
          title: i18n.t('forms.application.sitemap.постамат.title'),
          children: [{
            link: 'i-i-s-zapasnojj-postamat-точка-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-zapasnojj-postamat-точка-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-zapasnojj-postamat-точка-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-zapasnojj-postamat-ячейка-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-zapasnojj-postamat-ячейка-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-zapasnojj-postamat-ячейка-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.получатель.caption'),
          title: i18n.t('forms.application.sitemap.получатель.title'),
          children: [{
            link: 'i-i-s-zapasnojj-postamat-получатель-l',
            caption: i18n.t('forms.application.sitemap.получатель.i-i-s-zapasnojj-postamat-получатель-l.caption'),
            title: i18n.t('forms.application.sitemap.получатель.i-i-s-zapasnojj-postamat-получатель-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-zapasnojj-postamat-посылка-l',
            caption: i18n.t('forms.application.sitemap.получатель.i-i-s-zapasnojj-postamat-посылка-l.caption'),
            title: i18n.t('forms.application.sitemap.получатель.i-i-s-zapasnojj-postamat-посылка-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})