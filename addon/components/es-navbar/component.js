import Component from '@ember/component';
import { computed } from '@ember/object';

import layout from './template';
import defaultLinks from '../../constants/links';

export default Component.extend({
  layout,
  navLinks: computed('links.[]', function() {
    if(this.links) {
      return this.links;
    }

    return defaultLinks;
  })
});
