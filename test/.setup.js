require('babel-register')();
require('mdl-react');

var jsdom = require('node-jsdom').jsdom;
var chai = require('chai');
global.expect = chai.expect;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(function(property){
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
