import React from 'react';

// export default (props) => (
// 	<div className="row">
//     <div className="col s12 center">
//     	<div className={props.flipped ? 'flip-container-flipped' : 'flip-container'}>
//   			<div className='flipper'>
// 					<div className='front'>
// 						<img src={props.img}
// 					</div>
// 					<div className='back'>
//
// 					</div>
// 				</div>
//     	</div>
//     </div>
// 	</div>
// );

export default (props) => (
    <div className="row">
   <div className="col s12 center">
         { props.flipped && props.currentName
       ?
			 <span>
				 <h3 className="answer">{ props.currentName }</h3>
				 <p className="answer"> Email: { props.email }</p>
				 <p className="answer"> Address: { props.address }</p>
				 <p className="answer"> Net Worth: { props.worth }</p>
			 </span>
       :
       <img height="500px" src={ props.currentFace } />
     }
   </div>
    </div>
);
