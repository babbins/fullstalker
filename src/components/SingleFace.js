import React from 'react';

export default (props) => (
	<div className="row">
    <div className="col s12 center">
    	<div className={props.flipped ? 'flip-container-flipped' : 'flip-container'}>
  			<div className='flipper'>
					<div className='front'></div>
					<div className='back'>
						<p className='answer'>{props.currentName}</p>
					</div>
				</div>
    	</div>
    </div>
	</div>
);
