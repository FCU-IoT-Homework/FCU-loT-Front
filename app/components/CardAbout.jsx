// CardWithBtn.jsx

var React = require('react');
var MDL = require('mdl-react');

module.exports = React.createClass({

	displayName : 'CardAbout',

	getDefaultProps: function() {
		return {
			title: '人物名稱',
			text : '職稱名稱',
			avatar: 'https://avatars2.githubusercontent.com/u/5138488?v=3&s=460',
			github: 'https://github.com/Heng-xiu',
		};
	},

	render: function() {

		var supportTextStyle = {
			fontSize: "20px",
		};

		var titleStyle = {
			color: '#fff',
			background :  'url(' + this.props.avatar + ')' + 'center / cover #46B6AC',
		};

		return (
			<a href={this.props.github} target='_blank' style={{textDecoration:'none'}}>
			<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
				<MDL.CardTitle height="460" style={titleStyle}>
					{this.props.title}
				</MDL.CardTitle>
				<MDL.CardSupportingText style={supportTextStyle}>
					<p>{this.props.text}</p>
				</MDL.CardSupportingText>
			</MDL.Card>
			</a>
		);
	},
});
