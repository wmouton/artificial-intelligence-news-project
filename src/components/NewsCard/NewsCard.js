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
import useStyles from './styles.js';

const NewsCard = ({
	article: { description, publishedAt, source, title, url, urlToImage },
	i,
}) => {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.card}>
				<CardActionArea href={url} target='_blank'>
					<CardMedia
						className={classes.media}
						image={
							urlToImage ||
							'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fak5.picdn.net%2Fshutterstock%2Fvideos%2F7816963%2Fthumb%2F3.jpg%3Fi10c%3Dimg.resize(height%3A160)&f=1&nofb=1'
						}
					/>
					<div className={classes.details}>
						<Typography variant='body2' color='textSecondary' component='h2'>
							{new Date(publishedAt).toDateString()}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='h2'>
							{source.name}
						</Typography>
					</div>
					<Typography className={classes.title} gutterBottom variant='h5'>
						{title}
					</Typography>
					<CardContent>
						<Typography variant='body2' color='textSecondary' component='p'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.cardActions}>
					<Button size='small' color='primary'>
						Learn More
					</Button>
					<Typography variant='h5' co lor='textSecondary'>
						{i + 1}
					</Typography>
				</CardActions>
			</Card>
		</div>
	);
};

export default NewsCard;
