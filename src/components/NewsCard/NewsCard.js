import React from 'react';
import {
	Card,
	CardActions,
	CardActionArea,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';

const NewsCard = ({
	article: { description, publishedAt, source, title, url, urlToImage },
	i,
}) => {
	return (
		<div>
			<Card>
				<CardActionArea>
					<CardMedia
						image={
							urlToImage ||
							'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fak5.picdn.net%2Fshutterstock%2Fvideos%2F7816963%2Fthumb%2F3.jpg%3Fi10c%3Dimg.resize(height%3A160)&f=1&nofb=1'
						}
					/>
					<div>
						<Typography
							variant='body2'
							color='textSecondary'
							component='h2'
						></Typography>
						<Typography
							variant='body2'
							color='textSecondary'
							component='h2'
						></Typography>
					</div>
					<Typography gutterBottom variant='h5'></Typography>
					<CardContent>
						<Typography
							variant='body2'
							color='textSecondary'
							component='p'
						></Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size='small' color='primary'></Button>
					<Typography variant='h5' co lor='textSecondary'>
						{}
					</Typography>
				</CardActions>
			</Card>
		</div>
	);
};

export default NewsCard;
