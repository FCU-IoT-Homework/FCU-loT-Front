
"use strict";

var React = require('react');
var MDL = require('mdl-react');
var Components = require('../components');
var api = require('../js/api.js');

module.exports = React.createClass({

	getData : function(){
		console.log('Call getDate()');
		api.get('/return_recent.php', function(res){
			console.log('humidity:', res.body[0].humidity);
		});
	},

	render: function() {
		this.getData()
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
				<Components.DocTitle title="一般偵測"></Components.DocTitle>
				<hr />
				<MDL.Grid>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>溫濕度</h3>
								<MDL.Button type="RaisedButton" style={btnStyle} >
									Button
								</MDL.Button>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>土壤</h3>
								<MDL.Button type="RaisedButton" style={btnStyle}>
									Button
								</MDL.Button>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>寵物</h3>
								<MDL.Button type="RaisedButton" style={btnStyle}>
									Button
								</MDL.Button>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<MDL.Card shadow={4} style={cardStyle}>
							<h3>空氣污染</h3>
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
