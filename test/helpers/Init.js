import React from "react";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
require('isomorphic-fetch');

const JsDOM = require('jsdom').JSDOM;

let dom = new JsDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.document = dom;
global.window = document.parentWindow;
global.navigator = {userAgent: 'node.js'};