import React from 'react';
import ReactDOM from 'react-dom';
import StudentApp from './StudentApp';
import NavBarComp from './NavBarComp';

const navItems = [
  {
    text: 'Tab 1',
    link: 'https://www.google.com/',
  },
  {
    text: 'Tab 2',
    link: 'https://www.google.com/',
  },
];

ReactDOM.render(<NavBarComp siteTitle="React Test" navItems={navItems} />, document.getElementById('nav'));
ReactDOM.render(<StudentApp />, document.getElementById('index'));
