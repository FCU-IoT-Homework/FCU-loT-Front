
"use strict";

var React = require('react');
var MDL = require('mdl-react');

module.exports = React.createClass({

	render: function() {
		var titleStyle = {
			color: '#fff',
			background : 'url("http://i.imgur.com/L5YFTxg.png") bottom right 15% no-repeat #46B6AC',
		};
		return (
			<div style={{padding:'20px'}}>
				<MDL.Grid>
					<MDL.GridCell col={3}>
						<MDL.Card width='320' height='320' shadow={8}>
							<MDL.CardTitle height="199" style={titleStyle}>
								頭像放置處
							</MDL.CardTitle>
							<MDL.CardSupportingText>
								個人製作區域
							</MDL.CardSupportingText>
							<MDL.CardAction border={true}>
								<MDL.Button type="FlatButton"
									isRipple={true}
									isPrimary={true}
							 	>其他連結（EX:github or blogger）
								</MDL.Button>
							</MDL.CardAction>
						</MDL.Card>
					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
