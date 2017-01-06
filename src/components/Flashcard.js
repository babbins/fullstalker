import React, { Component } from 'react';
import {Link} from 'react-router';
import SingleFace from './SingleFace';
import Buttons from './Buttons';

class Flashcard extends Component {

	constructor() {
		super();

		this.state = {
			currentName: 'Sophia',
			currentFace: '/media/sophia.png',
			address: '',
			worth: '',
			email: '',
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
				worth: randomPerson.worth,
				email: randomPerson.email,
				address: randomPerson.address,
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
				<div className="row center">
					<br />
					<br />
					<img src="/media/logo-text_only.png" height="75px" />
					<br />
					<br />
					<br />
					<div className="col s2">
						<Link to="/start">
							<button className="btn-floating btn-large waves-effect waves-light amber darken-3">
								<i className="material-icons">home</i>
							</button>
						</Link>
					</div>
					<div className="col s8">
						<SingleFace currentName={this.state.currentName} currentFace={this.state.currentFace} flipped={this.state.flipped} />
						<br />
						<br />
						<Buttons setRandomCurrent={this.setRandomCurrent} flipped={this.state.flipped} flipCard={this.flipCard} />
					</div>
					<div className="col s2">
						<button onClick={this.setRandomCurrent} className="btn-floating btn-large waves-effect waves-light amber darken-3">
							<i className="material-icons">chevron_right</i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Flashcard;
