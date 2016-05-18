
"use strict";

var React = require('react');
var MDL = require('mdl-react');
var Components = require('../components');
var api = require('../js/api.js');

module.exports = React.createClass({

	getData : function(){
		this.setState({
			temperature: api.get('/return_recent.php', function(res){
				return res.body[0]['temperature'];
			}),
		});
	},

	getInitialState : function(){
		return {
			temperature: 999,
			humidity: 666,
			soil: 333,
		};
	},

	componentWillMount : function(){
		this.getData();
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
						<Components.CardWithBtn title="空氣污染(？" ></Components.CardWithBtn>
					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
