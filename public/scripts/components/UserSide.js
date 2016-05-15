import React from 'react';
import user from '../models/User.js';

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({
	
	render: function () {
		console.log(user.rebel);
		if (user.rebel === 'true') {

		return (
			<div className='rebel'>
				<img src ='./images/Logos/Rebel.png' width='50%' height='auto'/>
			</div>
			);

		} else {
			return (
				<div className='empire'>
					<img src ='./images/Logos/Empire.png' width='50%' height='auto'/>
				</div>    
				);
		}

	}

});