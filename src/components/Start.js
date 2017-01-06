import React from 'react';
import {Link} from 'react-router';
function myFunction() {
   console.log('your mom!');
}

export default () => (
	<div>
    <br />
    <br />
    <br />
    <div className="valign-wrapper row">
      <div className="valign col s7 center">
        <img id="logo" className="text-align" src="/media/logo.png" />
      </div>
      <div className="valgin col s5 center">
        <div className="start-text">
          <h5>
          Fullstalkr will help you learn the names of the many faces of Fullstack and Grace Hopper Academy!
          </h5>
        </div>
        <Link to="/flashcard">
  	     <button className="waves-effect waves-light btn-large amber darken-3">Begin!</button>
        </Link>
      </div>
	  </div>
  </div>
);
