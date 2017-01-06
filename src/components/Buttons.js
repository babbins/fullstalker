import React from 'react';

export default (props) => (
	<div>
		{
			!props.flipped
				? (<button className="btn" onClick={props.flipCard}>FLIP</button>)
				: (
					<div>
						<button className="btn" onClick={props.setRandomCurrent}>X</button> <button className="btn" onClick={props.setRandomCurrent}>O</button>
					</div>
				  )
		}
	</div>
);
