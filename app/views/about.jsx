
"use strict";

var React = require('react');
var MDL = require('mdl-react');

module.exports = React.createClass({

	render: function() {
		var supportTextStyle = {
			fontSize: "20px",
		};
		var titleStyle1 = {
			color: '#fff',
			background : 'url("https://avatars2.githubusercontent.com/u/5138488?v=3&s=460") center / cover #46B6AC',
		};
		var titleStyle2 = {
			color: '#fff',
			background : 'url("https://avatars1.githubusercontent.com/u/11376362?v=3&s=460") center / cover #46B6AC',
		};
		var titleStyle3 = {
			color: '#fff',
			background : 'url("https://avatars3.githubusercontent.com/u/13153677?v=3&s=460") center / cover #46B6AC',
		};
		var titleStyle4 = {
			color: '#fff',
			background : 'url("https://avatars3.githubusercontent.com/u/5456589?v=3&s=460") center / cover #46B6AC',
		};
		var titleStyle5 = {
			color: '#fff',
			background : 'url("https://avatars1.githubusercontent.com/u/16376653?v=3&s=460") center / cover #46B6AC',
		};
		var titleStyle6 = {
			color: '#fff',
			background : 'url("https://avatars3.githubusercontent.com/u/16316583?v=3&s=460") center / cover #46B6AC',
		};
		var titleStyle7 = {
			color: '#fff',
			background : 'url("https://avatars2.githubusercontent.com/u/3949245?v=3&s=460") center / cover #46B6AC',
		};
		var titleStyle8 = {
			color: '#fff',
			background : 'url("https://avatars3.githubusercontent.com/u/10772111?v=3&s=460") center / cover #46B6AC',
		};
		return (
			<div style={{padding:'20px'}}>
				<MDL.Grid>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<a href="www.google.com.tw" style={{textDecoration:'none'}}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle1}>
								許恆修
							</MDL.CardTitle>
							<MDL.CardSupportingText style={supportTextStyle}>
								<p>職稱：前端工程師</p>
							</MDL.CardSupportingText>
						</MDL.Card>
						</a>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle2}>
								荊輔翔
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>職稱：Arduino 大神</p>
							</MDL.CardSupportingText>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle7}>
								陳靚德
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>職稱：靚德大神</p>
							</MDL.CardSupportingText>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle3}>
								邱勝敏
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>職稱：後端工程師</p>
							</MDL.CardSupportingText>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle4}>
								林伯丞
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>職稱：全端工程師</p>
							</MDL.CardSupportingText>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle5}>
								林佩萱
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>職稱：後端工程師</p>
							</MDL.CardSupportingText>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle6}>
								蔡秉承
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>職稱：前端工程師</p>
							</MDL.CardSupportingText>
						</MDL.Card>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle8}>
								簡邱偉
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>職稱：前端工程師</p>
							</MDL.CardSupportingText>
						</MDL.Card>
					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
