import React, { Component } from 'react';
import SingleFace from './SingleFace';
import Buttons from './Buttons';

class Flashcard extends Component {

	constructor() {
		super();

		this.state = {
			currentName: 'Sophia',
			currentFace: '/media/sophia.png',
			flipped: false
		};

		this.flipCard = this.flipCard.bind(this);
		this.setRandomCurrent = this.setRandomCurrent.bind(this);
	}

	componentDidMount() {
		this.setRandomCurrent();
	}

	setRandomCurrent() {
		const {people} = this.props;
		const randomPerson = people[Math.floor( people.length * Math.random())];
		if (this.state.currentName === randomPerson.name) {
			this.setRandomCurrent();
		} else {
			this.setState({
				currentName: randomPerson.name,
				currentFace: randomPerson.imgUrl,
				flipped: false
			});
		}
	}

	flipCard() {
		this.setState({flipped: true});
	}

	render() {
		return (
			<div>
				<SingleFace currentName={this.state.currentName} currentFace={this.state.currentFace} flipped={this.state.flipped} />
				<Buttons setRandomCurrent={this.setRandomCurrent} flipped={this.state.flipped} flipCard={this.flipCard} />
			</div>
		);
	}
}

export default Flashcard;
