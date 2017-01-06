import React, { Component } from 'react';
import axios from 'axios';
import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import Start from './components/Start';
import Flashcard from './components/Flashcard';

// Create a new component

class App extends Component {
	constructor() {
		super();
		this.state = {
			people: []
		}
	}
	componentDidMount() {
		axios.get('/api/people')
			.then(res => res.data)
			.then(people => {
				this.setState({
					people
				});
			})
	}
	render() {
		const props = Object.assign({}, this.state);
		return (
			<div>
			 { this.props.children && React.cloneElement(this.props.children, props) }

			</div>
		);
	}
}


// Make sure the HTML generated by the component is on the page (the DOM)
ReactDOM.render(
	<Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/start" component={Start}/>
        <IndexRedirect to="/start"/>
				<Route path="/flashcard" component={Flashcard}/>
      </Route>
  </Router>, document.querySelector('.container'));
