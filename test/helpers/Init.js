import React from "react";
import chai from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import chaiEnzyme from 'chai-enzyme'


// function myAwesomeDebug (wrapper) {
//     let html = wrapper.html()
//     // do something cool with the html
//     console.log("hello")
//     return html
//   }

// chai.use(chaiEnzyme(myAwesomeDebug))

configure({ adapter: new Adapter() });
require('isomorphic-fetch');

const JsDOM = require('jsdom').JSDOM;

let dom = new JsDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.document = dom;
global.window = document.parentWindow;
global.navigator = {userAgent: 'node.js'};
global.expect = require('chai').expect;

