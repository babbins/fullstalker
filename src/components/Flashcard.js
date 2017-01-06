import React, { Component } from 'react';
import SingleFace from './SingleFace';
import Buttons from './Buttons';

class Flashcard extends Component {

	constructor() {
		super();

		this.state = {
			flipped: false
		};

		this.flipCard = this.flipCard.bind(this);
	}

	flipCard() {
		this.setState({flipped: true});
	}

	render() {
		return (
			<div>
				<SingleFace currentName={this.props.currentName} currentFace={this.props.currentFace} flipped={this.state.flipped} />
				<Buttons flipped={this.state.flipped} flipCard={this.flipCard} />
			</div>
		);
	}
}

export default Flashcard;