import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height:375,
        padding:"5px 5px"
      },
      media: {
        objectFit :"contain"
      },
    title:{
        ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    }
}));
const productRating = () =>{
    const ratingGroup = [5,4,3,2,1];
    ratingGroup.forEach((val) =>{
        return(
             <StarIcon></StarIcon>
        )
    })
}
export default function ProductCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
        <CardMedia className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={props.image}>
        </CardMedia>
        <CardContent>
          <div className={classes.title}  >
            {props.title}
          </div>
          {productRating}
          <Typography variant="h5" gutterBottom>
            $ {props.price}
          </Typography>
        </CardContent> 

      {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.image} />
      </ButtonBase>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions> */}
    </Card>
  );
}
