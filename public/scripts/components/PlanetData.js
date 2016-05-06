import React from 'react';

//component to render a picture and all data on a particular planet 
//this is displayed on PlanetPage
export default React.createClass({
	render: function() {
		return (
				<section>
					<h1>{this.props.name}</h1>
					<div>{this.props.climate}</div>
				</section>
				);
	}
});


