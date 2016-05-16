import React from 'react';
import PostForm from './PostForm.js';
import GetPost from './GetPost.js';
import user from '../models/User.js';
import UserSide from './UserSide.js';

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({
	
	render: function () {
		console.log('id:', user.id);
		console.log('email:', user.email);
		console.log('rebel:', user.rebel);
		if (user.id) {

		return (
			<div>
				<UserSide />
				<PostForm planetId={this.props.planetId}/>
				<GetPost planetId={this.props.planetId}/>
			</div> 

			);

		} else {
			return (
				<div>
					<GetPost planetId={this.props.planetId}/>
				</div>

				);
		}

	}

});






	

	