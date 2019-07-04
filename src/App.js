import React, {Component} from 'react';

//components
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

//data
import { robots } from './robots';


class App extends Component{

	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
	}


	render(){

		const filteredRobots = this.state.robots.filter( robot => {
			return robot.name.toLowerCase().includes(this.state.searchField);
		});

		return (
			<div className = "tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
	

}

export default App;