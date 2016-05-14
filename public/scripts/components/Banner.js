import React from 'react';
import Navigation from './Navigation';


export default React.createClass({
	render: function() {
		return (
			<section className='banner-section'>
        		<div className='banner'>Star Wars</div>
        		<div className='subtitle'>The Travel Guide</div>
        		<Navigation />
			</section>
		);
	}
});







