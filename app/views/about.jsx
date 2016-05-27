
"use strict";

var React = require('react');
var MDL = require('mdl-react');

module.exports = React.createClass({

	render: function() {
		var titleStyle = {
			color: '#fff',
			background : 'url("https://avatars2.githubusercontent.com/u/5138488?v=3&s=460") top right 15% no-repeat #46B6AC',
		};
		return (
			<div style={{padding:'20px'}}>
				<MDL.Grid>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<MDL.Card maxWidth='300' width='100%' height='300' shadow={8}>
							<MDL.CardTitle height="460" style={titleStyle}>
								許恆修
							</MDL.CardTitle>
							<MDL.CardSupportingText style={{fontSize:"20px"}}>
								<p>前端工程師</p>
							</MDL.CardSupportingText>
						</MDL.Card>

					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
