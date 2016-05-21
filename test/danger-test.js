// include 需要的 library
var React = require('react');
var enzyme = require('enzyme');
// include 需要測試的檔案
var Danger = require('../app/views/danger.jsx');

describe('<Danger />', function(){

	it('should render Title', function(){
		var wrapper = enzyme.shallow(<Danger />);
		expect(wrapper.find('DocTitle'));
	});


	it('should render ”危險偵測“ ', function(){
		var wrapper = enzyme.shallow(<Danger />);
		expect(wrapper.find('危險偵測'));
	});

	it('should render 4個 MDL:GridCell', function(){
		var wrapper = enzyme.shallow(<Danger />);
		// console.log(wrapper.debug());
		expect(wrapper.find('MDL:GridCell').length).to.equal(4);
	});

});
