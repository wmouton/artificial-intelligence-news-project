import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const alanKey = API_KEY;

function App() {
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command }) => {
				if (command === 'testCommand') {
					alert('this code was executed');
				}
			},
		});
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Alan Artificial Intelligence Project
			</h1>
			<p style={{ textAlign: 'center' }}>
				Test Commands: <br />
				<br /> 'What is this website?' <br /> 'How do I use this website?'{' '}
				<br /> 'Start a command.'
			</p>
		</div>
	);
}

export default App;
