// import Nav from './Nav';
// import About from './About';
// import Shop from './Shop';
// import Example from './Example';
// import WijmoTree from './WijmoTree'
// import './App.css';
// import { Link } from 'react-router-dom';
// import Main from './router/Main';
// // import NotProducts from './router/NotProducts';
// import ProductDetail from './router/ProductDetail.js';
// import Products from './router/Products';
// import ItemDetail from './itemDetail'; 
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './product/Main';
// import NotProducts from './router/NotProducts';
import ProductDetail from './product/ProductDetail';
import Products from './product/Products';

function App() {
  return (
    <Router>   
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
      </ul>
      <Switch>
        <Route path={['/','/main']}exact><Main/></Route>
        <Route path='/products' exact><Products/></Route>
        <Route path='/products/:productID' exact><ProductDetail/></Route>
        {/* <Route path='*'><NotProducts/></Route> */}
      </Switch>
    </div>
    </Router>
    
    // <Router>   
    // <div className="App"> 
    //    <Nav />
    //    <Switch>    
    //     <Route path = "/" exact component = {Home}/>
    //     <Route path = "/example" exact component = {Example}/>
    //     <Route path = "/about" component = {About}/>
    //     <Route path = "/WijmoTree" component = {WijmoTree}/>
    //     <Route path = "/shop" exact component = {Shop}/>
    //     <Route path = "/shop/:id" component = {ItemDetail}/>
    //    </Switch>
    // </div>
    // </Router>
  );
}

const Home = () => {
  return(
    <div>
    <h1> Home Page </h1>
    </div>
  );
};

export default App;
 