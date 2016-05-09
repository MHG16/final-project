import React from 'react';
import blogcollection from '../collections/BlogCollection';
import BlogItem from './BlogItem';   

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({

	getInitialState: function(){
		return {
			blogcollection: blogcollection};

	},

	componentDidMount: function() {
		this.state.blogcollection.on('change update', () => {
			this.setState({blogcollection: blogcollection});
		});

	},


	render: function () {
		return (
			<section>
				<form>
					<textarea></textarea>
					<button type="submit" onSubmit={this.savePost}>Save</button>  
				</form>
				<BlogItem />
			</section> 

			);
	},

//function to save a post to the server.  
	savePost: function(e) {
	e.preventDefault();
	$.ajax({
		url: '/auth/login',
		type: 'POST',
		data: {
			post: this.refs.post.value
		},

		success: (loggedArg) => {
			
			this.state.post.set(loggedArg);
		},
		error: (errorArg) => {
				

				this.setState({errors: errorArg.responseJSON});
			}
		});

	}
	
});

	

	