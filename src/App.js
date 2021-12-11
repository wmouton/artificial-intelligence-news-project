import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const alanKey = API_KEY;

function App() {
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				if (command === 'newHeadlines') {
					console.log(articles);
				}
			},
		});
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Alan Artificial Intelligence Project
			</h1>
		</div>
	);
}

export default App;
