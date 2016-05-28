
"use strict";

var React = require('react');
var MDL = require('mdl-react');
var Components = require('../components');

module.exports = React.createClass({

	render: function() {
		return (
			<div style={{padding:'20px'}}>
				<MDL.Grid>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '許恆修'
							text = '職稱：前端工程師'
							github = 'https://github.com/Heng-xiu'
							avatar = 'https://avatars2.githubusercontent.com/u/5138488?v=3&s=460'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '荊輔翔'
							text = '職稱：Arduino 大神'
							github = 'https://github.com/SCWhite'
							avatar = 'https://avatars1.githubusercontent.com/u/11376362?v=3&s=460'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '陳靖德'
							text = '職稱：靖德大神'
							github = 'https://github.com/danny50610'
							avatar = 'https://avatars2.githubusercontent.com/u/3949245?v=3&s=460'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '邱勝敏'
							text = '職稱：後端工程師'
							github = 'https://github.com/s951010sam'
							avatar = 'https://avatars3.githubusercontent.com/u/13153677?v=3&s=460'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '林柏丞'
							text = '職稱：全端工程師'
							github = 'https://github.com/ds934118'
							avatar = 'https://avatars3.githubusercontent.com/u/5456589?v=3&s=460'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '林佩萱'
							text = '職稱：後端工程師'
							github = 'https://github.com/sdf789'
							avatar = 'https://avatars1.githubusercontent.com/u/16376653?v=3&s=460'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '蔡秉辰'
							text = '職稱：前端工程師'
							github = 'https://github.com/TLOGBen'
							avatar = 'https://avatars3.githubusercontent.com/u/16316583?v=3&s=460'
						/>
					</MDL.GridCell>
					<MDL.GridCell col={3} colPhone={4} colTablet={4}>
						<Components.CardAbout
							title = '簡邱偉'
							text = '職稱：前端工程師'
							github = 'https://github.com/toculin38'
							avatar = 'https://avatars3.githubusercontent.com/u/10772111?v=3&s=460'
						/>
					</MDL.GridCell>
				</MDL.Grid>
			</div>
		);
	},

});
