import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height:500,
        paddingTop:40,
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            textAlign: 'center',
            margin: 0
          },
        padding:"5px 5px",
        textAlign : "center"
      },
      media: {
        objectFit :"contain"
      },
      star:{
        color:'red'
      },
    title:{
        ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
      },
}));


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
          { [...Array(5)].map(
                (value, index) => (
                <StarIcon className={classes.star} id={index + 1} key={index} />
                )) 
          }
          <Typography variant="h5" gutterBottom>
            $ {props.price}
          </Typography>
          <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddShoppingCartIcon>Add To Cart</AddShoppingCartIcon>}
      ></Button>
        </CardContent> 
    </Card>
  );
}
