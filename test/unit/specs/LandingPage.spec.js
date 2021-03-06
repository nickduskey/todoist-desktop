import Vue from 'vue';
import LandingPage from '@/components/LandingPage';

describe('LandingPage.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(LandingPage),
    }).$mount();

    expect(vm.$el.querySelector('#content').src).to.contain('https://todoist.com/');
  });
});
