import {useState} from 'react';
import {useEffect} from 'react';

function FetchRandomQuote(){
	const [state, setstate] = useState('');

	useEffect(async () => {
		const response = await fetch('https://api.quotable.io/random')
		const data = await response.json()
		setstate(data);
		console.log(`${data.content} —${data.author}`)
	}, []);

	return(
		<div>
			{state.content}
		</div>
	);
}

async function randomQuote() {
	const response = await fetch('https://api.quotable.io/random')
	const data = await response.json()
	console.log(data);
	return data;
}
export default FetchRandomQuote;