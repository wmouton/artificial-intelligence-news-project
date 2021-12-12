import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './components/NewsCards/NewsCards';

const API_KEY = process.env.REACT_APP_API_KEY;

const alanKey = API_KEY;

function App() {
	const [newsArticles, setNewsArticles] = useState([]);
	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles }) => {
				if (command === 'newHeadlines') {
					setNewsArticles(articles);
				}
			},
		});
	}, []);
	return (
		<div className='background'>
			<h1 style={{ textAlign: 'center' }}>
				Alan Artificial Intelligence News Reader
			</h1>
			<NewsCards articles={newsArticles} />
		</div>
	);
}

export default App;
