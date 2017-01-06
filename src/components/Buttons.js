import React from 'react';

export default (props) => (
	<div>
		{
			!props.flipped
				? (<button className="btn" onClick={props.flipCard}>FLIP</button>)
				: (
					<div>
						<button className="btn">X</button> <button className="btn">O</button>
					</div>
				  )
		}
	</div>
);