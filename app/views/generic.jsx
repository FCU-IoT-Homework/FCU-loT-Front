
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
			PIR1: '躲貓貓一號',
			PIR2: '躲貓貓二號',
			PIR3: '躲貓貓三號',
		};
	},

	componentWillMount : function(){
		this.getData();
	},

	isAnyOneAtHome : function(input) {
		if(input === '1'){
			return '有人在家';
		} else if(input === '0'){
			return '沒人在家';
		} else {
			return '工程師偷懶中';
		}
	},

	getData : function(){
		api.get('/return_recent.php', function(body, text){
			this.setState({
				'temperature': body[0]['temperature'],
				'humidity': body[0]['humidity'],
				'soil': body[0]['soil'],
			});
		}.bind(this));

		api.getTS('/feed/last.json?api_key=RBYK11ZDG0JO5FXV', function(body, text){
			this.setState({
				'PM': body['field1'],
			})
		}.bind(this));

		api.get('/return_infrared.php', function(body, text){
			this.setState({
				'PIR1': this.isAnyOneAtHome(body[0]['pir1']),
				'PIR2': this.isAnyOneAtHome(body[0]['pir2']),
				'PIR3': this.isAnyOneAtHome(body[0]['pir3']),
			});
		}.bind(this));
	},

	render: function() {
		return (
			<div style={{padding:'20px'}}>
				<Components.DocTitle title="一般偵測"></Components.DocTitle>
				<hr />
				<MDL.Grid>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardWithValue
							title="溫度狀態"
							text="目前溫度為："
							value={this.state.temperature}
							unit="度"
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardWithValue
							title="土壤狀態"
							text="目前土壤為："
							value={this.state.soil}
							unit='%'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardWithValue
							title="濕度狀態"
							text="目前濕度為："
							value={this.state.humidity}
							unit="%"
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardWithValue
							title="細懸浮微粒"
							text="讀取數值為："
							value={this.state.PM}
							unit="ppm"
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardWithValue
							title="房間一番"
							text="有沒有人在家～"
							value={this.state.PIR1}
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardWithValue
							title="房間二番"
							text="有沒有人在家～"
							value={this.state.PIR2}
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardWithValue
							title="房間三番"
							text="有沒有人在家～"
							value={this.state.PIR3}
						/>
					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
