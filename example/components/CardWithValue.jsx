// CardWithValue.jsx

var React = require('react');
var MDL = require('mdl-react');

module.exports = React.createClass({

	displayName : 'CardWithBtn',

	getDefaultProps: function() {
		return {
			title: '卡片標題',
			text: '顯示文字：',
			value : '數值',
		};
	},

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
			<MDL.Card shadow={4} style={cardStyle}>
				<h3>{this.props.title}</h3>
					<p>{this.props.text}{this.props.value}</p>
			</MDL.Card>
		);
	},
});
