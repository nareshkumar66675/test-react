import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
// import {expect} from 'chai';

import TableComp from '../src/TableComp';
import { TableTest, Record } from '../src/TableTest';
import AddStudent from '../src/AddStudent';
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

function addTest(rslt) {
  console.log(rslt);
}

describe('<AddStudent/>', () => {
  const wrapper = shallow(<AddStudent handleAdd={addTest} />);

  wrapper.setProps({ val: {} });
  it('Name Change event Validation', () => {
    // const handleNameChangeSpy = sinon.spy(AddStudent.prototype, 'handleNameChange');
    const event = { target: { name: 'test', value: 'naresh' } };
    wrapper.find('[name="Name"]').simulate('change', event);
    expect(wrapper.state('name')).to.equal('naresh');
    // expect(handleNameChangeSpy.calledOnce).to.equal(true);
  });

  it('Add Button click Validation', () => {
    // const handleNameChangeSpy = sinon.spy(AddStudent.prototype, 'handleNameChange');
    AddStudent.prototype.handleAdd = () => {

    };
    wrapper.find('button').simulate('click');
    // expect(wrapper.state('name')).to.equal('naresh');
    // expect(handleNameChangeSpy.calledOnce).to.equal(true);
  });

  // it('should have 3 Columns', () => {
  //   expect(wrapper.find('td')).to.have.length(3);
  //   // expect(wrapper.find('table')).to.have.descendants('#root');
  // });

  // wrapper.setProps({ val: { id: 1, name: 'Naresh', subject: 'Math' } });
  // it('Record Data Validation', () => {
  //   wrapper.find('td').forEach((node) => {
  //     // expect(node.text()).exist();
  //   });
  // });
});
