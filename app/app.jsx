
"use strict";

var MDL = require('mdl-react');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var App = React.createClass({
	mixins : [
		Router.State,
		Router.Navigation,
	],
	componentDidMount: function() {
		global._transitionTo = this.transitionTo;
	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log('App.componentDidUpdate');
		this.refs.layout.scrollTop(0);
	},
	render : function() {
		var headerLinks = [
			<a href='https://github.com/FCU-IoT-Homework' target='_blank'>
				<i className="fa fa-github" style={{fontSize:'15px',marginRight:'5px'}}> </i> GitHub
			</a>,
		];
		var drawerLinks = [
			<a href='#generic'>一般偵測</a>,
			<a href='#appliances'>控制家電</a>,
			<a href='#danger'>危險偵測</a>,
			<a href='#about'>製作團隊？</a>,
		];
		return (
			<MDL.Layout ref='layout'
				title='web-家控介面'
				href='#'
				isFixedHeader={true}
				isFixedDrawer={true}
				headerLinks={headerLinks}
				drawerLinks={drawerLinks}
				contentStyle={{ minHeight : '1000px' }}
				noDrawerTitle={true}
			>
				<Router.RouteHandler />
			</MDL.Layout>
		);
	},
});

var Home = require('./views/Home.jsx');
var Generic = require('./views/generic.jsx');
var Appliances = require('./views/appliances.jsx');
var Danger = require('./views/danger.jsx');
var About = require('./views/about.jsx');

var routes = (
	<Router.Route handler={App} >
		<Router.DefaultRoute name='home' handler={Home} />
		<Router.Route name='generic' path='generic' handler={Generic} />
		<Router.Route name='appliances' path='appliances' handler={Appliances} />
		<Router.Route name='danger' path='danger' handler={Danger} />
		<Router.Route name='about' path='about' handler={About} />
	</Router.Route>
);

Router.create({
	routes: routes,
	location: Router.HashLocation,
}).run(function (Handler) {
	React.render(
		<div><Handler /></div>,
		document.body
	);
	console.log('App 程式載入終了');
});
