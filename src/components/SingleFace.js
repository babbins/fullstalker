import React from 'react';

export default (props) => (
	<div className="row">
    <div className="col s12 center">
  		{ props.flipped && props.currentName
        ?
				<span>
	        <h1 className="singlename">{ props.currentName }</h1>
					<h1 className="singlename"> Email: { props.email }</h1>
					<h1 className="singlename"> Address: { props.address }</h1>
					<h1 className="singlename"> Net Worth: { props.worth }</h1>
				</span>
        :
        <img  height="500px" src={ props.currentFace } />
      }
    </div>
	</div>
);
