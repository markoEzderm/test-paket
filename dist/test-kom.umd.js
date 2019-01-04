(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global['test-kom'] = factory(global.React));
}(this, function (React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  class TestKom extends React.Component {
    render() {
      return React.createElement(
        'div',
        null,
        'Danas je lep dan da se napravi paket',
      );
    }
  }

  return TestKom;

}));
