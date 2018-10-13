import React from 'react';
import { HMR } from '@pwa/preset-react';
import Intro from '@components/Intro';
import style from './index.sass';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
function About() {
	return (
		<div className={ style.about }>
            <div id="overviewInfo">
                <Card>
                <CardActionArea>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" >
                        -
                    </Button>
                    <TextField
                        id="amount"
        
                        defaultValue="Bare"
                        margin="normal"
                        variant="filled"
                        />
                    <Button size="small" color="primary" >
                        +
                    </Button>
                    <Button size="small" color="primary" >
                        Buy
                    </Button>
                
                </CardActions>
                </Card>
                        
            </div>

            <div id="description">

            </div>

            <div id="comments">

            </div>
        </div>
	);
}

export default HMR(About, module);
