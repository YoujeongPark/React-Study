import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './product/Main';
import Products from './product/Products';
import Gallery from './gallerys/Gallery';
import ProductDetail from './product/ProductDetail';
import Photos from './photo/Photos';
import PhotoDetail from './photo/PhotoDetail';
import PostComponent from './post/PostComponent';
import Movie from './movie/Movies';
import Melon from './melon/Melon';
import Event from './event/Event';
import Etc from './etc/Etc';

function App() {
  return (
    <Router>   
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/gallerys'>Gallery</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/photos'>Photos</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/event'>Event</Link></li>
        <li><Link to='/melon'>Melon</Link></li>
        <li><Link to='/etc'>Etc</Link></li>
      </ul>
      <Switch>
        <Route path={['/','/main']}exact><Main/></Route>
        <Route path='/gallerys' exact><Gallery/></Route>
        <Route path='/movies' exact><Movie/></Route>
        <Route path='/products' exact><Products/></Route>
        <Route path='/products/:productID' exact><ProductDetail/></Route>
        <Route path='/photos' exact><Photos/></Route>
        <Route path='/photos/:photosID' exact><PhotoDetail/></Route>
        <Route path='/posts' exact><PostComponent/></Route>
        <Route path='/event' exact><Event/></Route>
        <Route path='/melon' exact><Melon/></Route>
        <Route path='/etc' exact><Etc/></Route>
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
 