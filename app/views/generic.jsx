
"use strict";

var React = require('react');
var MDL = require('mdl-react');
var Components = require('../components');
var api = require('../js/api.js');

module.exports = React.createClass({

	getInitialState : function(){
		return {
			temperature: 999,
			humidity: 666,
			soil: 333,
			PM: 2333,
		};
	},

	componentWillMount : function(){
		this.getData();
	},

	getData : function(){
		api.get('/return_recent.php', function(body, text){
			this.setState({
				'temperature': body[0]['temperature'],
				'humidity': body[0]['humidity'],
				'soil': body[0]['soil'],
			});
		}.bind(this));
	},

	render: function() {
		return (
			<div style={{padding:'20px'}}>
				<Components.DocTitle title="一般偵測"></Components.DocTitle>
				<hr />
				<MDL.Grid>
					<MDL.GridCell col={3}>
						<Components.CardWithValue title="溫度顯示器" text="目前溫度為：" value={this.state.temperature} />
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<Components.CardWithValue title="土壤顯示器" text="目前土壤為：" value={this.state.soil}/>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<Components.CardWithValue title="濕度顯示器" text="目前濕度為：" value={this.state.humidity}/>
					</MDL.GridCell>
					<MDL.GridCell col={3}>
						<Components.CardWithValue title="細懸浮微粒" text="讀取數值為：" value={this.state.PM}/>
					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
