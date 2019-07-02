import React from 'react';

//elements
import CardList from './CardList';
import SearchBox from './SearchBox';

//data
import { robots } from './robots';

const App = () => {
	return (
		<div className = "tc">
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots={robots}/>
		</div>
	);

}

export default App;