import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Example from './Example';
import './App.css';
import ItemDetail from './itemDetail'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>   
    <div className="App"> 
       <Nav />
       <Switch>    
        <Route path = "/" exact component = {Home}/>
        <Route path = "/example" exact component = {Example}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/shop" exact component = {Shop}/>
        <Route path = "/shop/:id" component = {ItemDetail}/>
       </Switch>
    </div>
    </Router>
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
 