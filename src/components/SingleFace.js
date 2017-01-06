import React from 'react';

export default (props) => (
	<div className="row">
    <div className="col s12 center">
  		{ props.flipped && props.currentName
        ?
        <h1 className="singlename">{ props.currentName }</h1>
        :
        <img src={ props.currentFace } />
      }
    </div>
	</div>
);
