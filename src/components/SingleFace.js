import React from 'react';

export default (props) => (
	<div className="row">
    <div className="col s12 center">
    	<div className={props.flipped ? 'flip-container-flipped' : 'flip-container'}>
  			<div className='flipper'>
					<div className='front'></div>
					<div className='back'>
						<span>
							<h1 className="answer">{ props.currentName }</h1>
							<h1 className="answer"> Email: { props.email }</h1>
							<h1 className="answer"> Address: { props.address }</h1>
							<h1 className="answer"> Net Worth: { props.worth }</h1>
						</span>
					</div>
				</div>
    	</div>
    </div>
	</div>
);
