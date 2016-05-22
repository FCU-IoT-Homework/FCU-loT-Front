// include 需要的 library
var React = require('react');
var enzyme = require('enzyme');
// include 需要測試的檔案
var Appliances = require('../app/views/appliances.jsx');

describe('<Danger />', function(){

	it('should render Title', function(){
		var wrapper = enzyme.shallow(<Appliances />);
		expect(wrapper.find('DocTitle'));
	});


	it('should render ”控制家電“ ', function(){
		var wrapper = enzyme.shallow(<Appliances />);
		expect(wrapper.find('控制家電'));
	});

	it('should render 4個 MDL:GridCell', function(){
		var wrapper = enzyme.shallow(<Appliances />);
		// console.log(wrapper.debug());
		expect(wrapper.find('MDL:GridCell').length).to.equal(6);
	});

});
