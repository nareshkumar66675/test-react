import React from "react";
import { mount, shallow } from 'enzyme';
// import {expect} from 'chai';

import {TableComp,TableTest} from '../src/TableComp';

// import chai from 'chai'


// chai.use(chaiEnzyme()) // Note the invocation at the end

describe('<TableComp/>', function () {
  const wrapper = shallow(<TableComp/>,{ disableLifecycleMethods: true });
  it('should have an input text to display row Count', function () {
    
    expect(wrapper.find('input')).to.have.length(1);
    //expect(wrapper.find('input')).to.have.className("py-1");
  });

  it('should have an input text to display row Count', function () {
    expect(wrapper.find('input')).to.have.length(1);
  });

});



describe('<TableTest/>', function () {
  const wrapper = shallow(<TableTest tabData=""/>);

  wrapper.setProps({ tabData: [] });
  it('should have a table', function () {
    
    expect(wrapper.find('table')).to.have.length(1);

    // expect(wrapper.find('table')).to.have.descendants('#root');
  });

  it('Row Count should match property value', function () {
    expect(wrapper.find('Record')).to.have.length(0);
    wrapper.setProps({ tabData: [{},{},{}] });
    expect(wrapper.find('Record')).to.have.length(3);
  });

});

