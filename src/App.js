import React from 'react'
import { BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import  ProductList  from './components/ProductList';
import  ProductDetail  from './components/ProductDetail';
import './index.css'
import './App.css'

const App = () => {
    return (
        <div className="App">
            This is App
            <Router >
                <Header />
                <Switch>
                <Route path='/' exact component={ ProductList} />
                <Route path='/product/:productId' exact component={ ProductDetail} />
                <Route>404 Not Found</Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
