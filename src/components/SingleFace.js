import React from 'react';

export default (props) => (
	<div>
		<h1>
			{ props.flipped && props.currentName }
		</h1>
		<img src={ props.currentFace } />
	</div>
);