import React, { Component } from 'react';
import SingleFace from './SingleFace';

class Flashcard extends Component {

	constructor() {
		super();

		this.state = {
			currentName: '',
			currentFace: '',
			flipped: false
		};
	}

	render() {
		return (
			<div>
				<SingleFace />
			</div>
		);
	}
}