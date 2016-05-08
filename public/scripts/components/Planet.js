import React from 'react';
import {browserHistory} from 'react-router';


export default React.createClass({
	render: function() {
		return (
				<section>
					{/*<a href={'http://localhost:3000/planet/' + this.props.id}>{this.props.name}</a>*/}
					<button onClick={this.displayPlanet}>{this.props.name}</button>
				</section>
				);
	},

	displayPlanet: function (e) {
		browserHistory.push(`/planet/${this.props.id}/planetpage`);

	}


});




