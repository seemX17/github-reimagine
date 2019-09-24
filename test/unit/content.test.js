import Vue from 'vue';
import jsdom from 'jsdom';
import contentViewComponent from '../src/views/Content.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for contentViewComponent', () => {
  it('Test data msg', () => {
    const ClonedComponent = Vue.extend(contentViewComponent);
    const NewComponent = new ClonedComponent({
      data() {
        return {
          fileContents: 'Using Jest to unit test Vue.js components can be tricky',
        };
      },
    }).$mount();
    renderer.renderToString(NewComponent, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const firstHeading = dom.window.document.querySelector('code');
      expect(firstHeading.textContent).toContain('Using Jest to unit test Vue.js components can be tricky');
    });
  });
});