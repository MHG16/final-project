import React from 'react';
import postmodel from '../models/PostModel.js';
import PostForm from './PostForm.js';
import GetPost from './GetPost.js';

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({
	
	render: function () {
		return (
			<div>
				<PostForm />
				<GetPost />
			</div> 

			);
	}

});






	

	