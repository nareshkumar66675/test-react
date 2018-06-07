import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';
import Popup from '../src/Popup';

describe('<Popup/>', () => {
  const wrapper = mount(<Popup />);
  wrapper.instance().toggle();
  it('Validate Modal Properties', () => {
    wrapper.setProps({ title: 'hello' });
    expect(wrapper.find('.modal-title').text()).to.equal('hello');
    wrapper.setProps({ body: 'hello' });
    expect(wrapper.find('.modal-body').text()).to.equal('hello');
  });
});
