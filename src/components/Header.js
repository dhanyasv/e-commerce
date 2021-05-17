import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();
    const count = useSelector((state) => state.count);
    return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link className="linkTag" to={`/`}>
          <Typography variant="h6"  className={classes.title}>
            Demo E-Commerce Site
          </Typography>
          </Link>
          <div className="shoping-basket">
            <div className="basket-icon">
            <ShoppingCartOutlinedIcon  ></ShoppingCartOutlinedIcon>
            </div>
            <div className="basket-text">
            {count.count}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header
