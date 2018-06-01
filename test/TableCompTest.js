import React from "react";
import { mount, shallow } from 'enzyme';
// import {expect} from 'chai';

import {TableComp} from '../src/TableComp';

import chai from 'chai'
// import chaiEnzyme from 'chai-enzyme'

// chai.use(chaiEnzyme()) // Note the invocation at the end

describe('<TableComp/>', function () {
  const wrapper = shallow(<TableComp/>);
  it('should have an input text to display row Count', function () {
    
    chai.expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have an input text to display row Count', function () {
    chai.expect(wrapper.find('input')).to.have.length(1);
  });

});