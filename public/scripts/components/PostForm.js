import React from 'react';

export default React.createClass({
	render: function () {
		return (
			<div>
				<form onSubmit={this.savePost}>
				<textarea placeholder="Descibe your visit" ref="travelpost" name="travelpost" cols="80" rows="40"></textarea>
				<button type='submit' >Save</button>
				</form>
			</div>
			);

	},

	savePost: function (e) {
		e.preventDefault;
		$.ajax


	}

});





