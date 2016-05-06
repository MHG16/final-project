import React from 'react';


export default React.createClass({
	render: function() {
		return (
				<section>
					<button type="submit">{this.props.name}</button>
				</section>
				);
	}
});


