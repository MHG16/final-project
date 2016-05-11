import React from 'react';
import postcollection from '../collections/PostCollection'; 
import postmodel from '../models/PostModel.js';
import PostForm from './PostForm.js';

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({
	//set the state here
	getInitialState: function () {
		return {postcollection: postcollection};

	},
	//when the collection of Posts is updated or changed, 
	//set the state on the collection
	componentDidMount: function() {
		this.state.postcollection.on('change update', () => {
			this.setState({postcollection: postcollection});
		});
		this.state.postcollection.fetch();
	},

	//when the submit button is clicked, concatenate the latest post 
	//to the collection  
	savePost: function (e) {
		e.preventDefault();
		this.setState({postcollection: allPosts});
	}, 


	render: function () {
		console.log(this.state.postcollection);
		return (
			<div>
				<PostForm />
			</div> 

			);
	}

});



// function to save a post to the server.  
// 	savePost: function(e) {
// 	e.preventDefault();
// 	$.ajax({
// 		url: '/auth/login',
// 		type: 'POST',
// 		data: {
// 			post: this.refs.post.value
// 		},

// 		success: (loggedArg) => {
			
// 			this.state.post.set(loggedArg);
// 		},
// 		error: (errorArg) => {
				

// 				this.setState({errors: errorArg.responseJSON});
// 			}
// 		});

// 	}
	


	

	