import React from 'react';
import user from '../models/User.js';

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({
	
	render: function () {
		console.log('rebel:',user.rebel);
		console.log('id:',user.id);
		if (user.get('rebel')) {

		return (
					<div className='row'>
							<div className='offset-by-ten one columns'>
								<div className='bluetransition'>
									<img className='rebel' src ='../../images/Logos/rebel.png' width='100%' height='auto'/>
								</div>
							</div>
					</div>
			);

		} else {
			return (
					<div className='row'>
						<div className='offset-by-ten one columns'>
							<img className='empire' src ='../../images/Logos/empire.png' width='100%' height='auto'/>
						</div>
					</div>  
		
				);
		}

	}

});

