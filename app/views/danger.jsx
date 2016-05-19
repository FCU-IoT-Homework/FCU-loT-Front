
"use strict";

var React = require('react');
var MDL = require('mdl-react');
var Components = require('../components');

module.exports = React.createClass({

	render: function() {

		var btnStyle = {
			margin: '5px',
			display: 'inline-block',
		};

		var cardStyle = {
			margin : '0 auto',
			maxWidth : '300px',
			width : '100%',
			padding : '20px',
			textAlign : 'center',
		};

		return (
			<div style={{padding:'20px'}}>
				<Components.DocTitle title="危險偵測"></Components.DocTitle>
				<hr />
				<MDL.Grid>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>瓦斯</h3>
								<MDL.Button type="RaisedButton" style={btnStyle} >
									Button
								</MDL.Button>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>火災</h3>
								<MDL.Button type="RaisedButton" style={btnStyle}>
									Button
								</MDL.Button>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>一氧化碳</h3>
								<MDL.Button type="RaisedButton" style={btnStyle}>
									Button
								</MDL.Button>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>限制區域</h3>
								<MDL.Button type="RaisedButton" style={btnStyle}>
									Button
								</MDL.Button>
						</MDL.Card>
					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
