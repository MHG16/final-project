import React from 'react';


export default React.createClass({
	render: function() {
		return (
			<section>
				<h1>This is my Planet Page</h1>
			</section>
		);
	}
});










// import React from 'react';
// import planetcollection from './collections/PlanetCollection';
// import Planet from './Planet.js';


// const Planet = React.createClass ({
// 	getInitialState: function(){
// 		console.log('getInitialState');
// 		return{planetcollection: planetcollection};
// 	},
// 	componentDidMount: function(){
// 		console.log('I mounted Planet!');
// 		this.state.planetcollection.fetch();
// 		this.state.planetcollection.on('update', () => {
// 			this.setState({planetcollection: planetcollection});
// 			console.log('testing');
// 		});
	
// 	},

// 	render: function(){
// 			let planets = this.state.planetcollection.map(
// 				function(value, index, array) {
// 					return (<Planet
// 					key = {value.get('id')}
// 					id = {value.get('id')}
// 					name={value.get('name')}
// 					climate = {value.get('climate')}
// 					diameter = {value.get('diameter')}
// 					population={value.get('population')} />
// 					);
// 				});
// 	}	
// });