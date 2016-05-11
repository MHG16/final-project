import React from 'react';
import postmodel from '../models/PostModel.js';
import PostForm from './PostForm.js';

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({
	
	render: function () {
		console.log(this.state.postcollection);
		return (
			<div>
				<PostForm />
				<PostItem />
			</div> 

			);
	}

});






	

	