var React = require('react');
var enzyme = require('enzyme');
var Generic = require('../example/views/generic.jsx');

describe('<Generic />', function(){

	it('should render Title', function(){
		var wrapper = enzyme.shallow(<Generic />);
		// console.log(wrapper.debug());
		expect(wrapper.find('DocTitle'));
	});


	it('should render ”一般偵測“ ', function(){
		var wrapper = enzyme.shallow(<Generic />);
		expect(wrapper.find('一般偵測'));
	});

	it('should render h3', function(){
		var wrapper = enzyme.shallow(<Generic />);
		expect(wrapper.find('h3').length).to.equal(4);
	});


});
