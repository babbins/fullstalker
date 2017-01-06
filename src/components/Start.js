import React from 'react';

function myFunction() {
   console.log('your mom!');
}

export default () => (
	<div className='image-fadeout'>
		<button onclick="myFunction()">Reload page</button>
	</div>
);