import React from 'react';
import blogcollection from './collections/BlogCollection';

//component to create planet blog for each planet
//only regsitered and signed in users can add blog entries

export default React.createClass({

	getInitialState: function(){
		return {blogcollection: blogcollection};

	},

	componentDidMount: function() {
		this.state.blogcollection.on('change update', () => {
			this.setState({blogcollection: blogcollection});
		});

		this.state.planetcollection.fetch();

	},


	render: function () {
		return (
			<section>
				<form>
					<textarea></textarea>
					<button type="submit" onSubmit={this.savePost} >Save</button>  
				</form>
				<BlogList />
			</section> 

			);
	},

	savePost: function () {

	}
	

});

	

	