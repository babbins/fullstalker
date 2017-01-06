import React from 'react';

export default (props) => (
	<div className="row">
    <div className="col s12 center">
  		{ props.flipped && props.currentName
        ?
        <h1 className="singlename">{ props.currentName }</h1>
        :
        <img  height="500px" src={ props.currentFace } />
      }
    </div>
	</div>
);
