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

const NewsCard = () => {
	return (
		<div>
			<Card>
				<CardActionArea>
					<CardMedia />
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
			</Card>
		</div>
	);
};

export default NewsCard;
