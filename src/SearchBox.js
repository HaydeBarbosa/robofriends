import React from 'react';

const SearchBox = ({searchFiels, searchChange}) =>{
	return(
		<div className="pa2">
			<input
				type="search"
				placeholder="search RoboFriend"
				className="pa3 ba b--green bg-lightest-blue"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;