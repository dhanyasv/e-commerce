import React from 'react'
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import  ProductList  from './components/ProductList';
import  ProductDetail  from './components/ProductDetail';
import Grid from '@material-ui/core/Grid';
import './index.css'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Router >
                <Grid container >
                <Grid container item xs={12} >
                    <Header />
                </Grid>
                <Switch>
                <Route path='/' exact component={ ProductList} />
                <Route path='/product/:productId' exact component={ ProductDetail} />
                <Route>404 Not Found</Route>
                </Switch>
                </Grid>
            </Router>
        </div>
    )
}

export default App
