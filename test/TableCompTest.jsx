import React from 'react';
import { shallow } from 'enzyme';
// import {expect} from 'chai';

import TableComp from '../src/TableComp';
import TableTest from '../src/TableTest';
import Record from '../src/Record';
// import { Record } from '../src/Record';
// import { AddStudent } from '../src/AddStudent';

// import chai from 'chai'


// chai.use(chaiEnzyme()) // Note the invocation at the end

describe('<TableComp/>', () => {
  const wrapper = shallow(<TableComp />, { disableLifecycleMethods: true });
  it('should have an input text to display row Count', () => {
    expect(wrapper.find('input')).to.have.length(1);
    // expect(wrapper.find('input')).to.have.className("py-1");
  });

  it('should have an input text to display row Count', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });
});

describe('<TableTest/>', () => {
  const wrapper = shallow(<TableTest tabData="" />);

  wrapper.setProps({ tabData: [] });
  it('should have a table', () => {
    expect(wrapper.find('table')).to.have.length(1);
    // expect(wrapper.find('table')).to.have.descendants('#root');
  });

  it('Row Count should match property value', () => {
    expect(wrapper.find('Record')).to.have.length(0);
    wrapper.setProps({ tabData: [{}, {}, {}] });
    expect(wrapper.find('Record')).to.have.length(3);
  });
});

describe('<Record/>', () => {
  const wrapper = shallow(<Record val="" />);

  wrapper.setProps({ val: {} });
  it('should have a Table Row', () => {
    expect(wrapper.find('tr')).to.have.length(1);
    // expect(wrapper.find('table')).to.have.descendants('#root');
  });

  it('should have 3 Columns', () => {
    expect(wrapper.find('td')).to.have.length(3);
    // expect(wrapper.find('table')).to.have.descendants('#root');
  });

  // wrapper.setProps({ val: { id: 1, name: 'Naresh', subject: 'Math' } });
  // it('Record Data Validation', () => {
  //   wrapper.find('td').forEach((node) => {
  //     // expect(node.text()).exist();
  //   });
  // });
});

