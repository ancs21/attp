import React from 'react';
import { HMR } from '@pwa/preset-react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Info (props) {
    return (
        <div>
            <div id="overviewInfo">
                <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
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
                    <Button size="small" color="primary" className={sty}>
                        -
                    </Button>
                    <TextField
                        id="amount"
                        className={classes.textField}
                        defaultValue="Bare"
                        margin="normal"
                        variant="filled"
                        />
                    <Button size="small" color="primary" className={sty}>
                        +
                    </Button>
                    <Button size="small" color="primary" className={sty}>
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

export default HMR(Blog, module);