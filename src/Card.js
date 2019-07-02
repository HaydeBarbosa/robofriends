import React from 'react';

const Card = ( {id, name, email}) =>{
	return(
		<div className='tc bg-light-green dib br5 ma1 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h4>{name}</h4>
				<p>{email}</p>
			</div>
		</div>

	);
}

export default Card;