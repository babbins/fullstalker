import React from 'react';

export default (props) => (
	<div className="center">
		<div className="row">
			<div className="col s3"></div>
			<div className="col s6">
				{
					!props.flipped
						? (<button className="btn amber darken-3" onClick={props.flipCard}>FLIP</button>)
						: (
								<div>
									<button className="btn" onClick={props.setRandomCurrent}>X</button> <button className="btn" onClick={props.setRandomCurrent}>O</button>
								</div>
						  )
				}
			</div>
			<div className="col s3"></div>
		</div>
	</div>
);
