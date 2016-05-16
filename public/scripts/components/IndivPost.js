import React from 'react';

export default React.createClass({
	render: function() {
		return(
			<section>
				<div className='row'>
						<div className='offset-by-one ten columns' id='singlepost'>
							<p className='text'>{this.props.body}</p>
						</div>
				</div>
			</section>

			);


	}

});
