
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import './component/Service/Service'
import Service from './component/Service/Service';
import Skill from './component/skill/Skill';
import Notfound from './component/NotFound/Notfound';
import About from './component/About/About';
import Footer from './component/footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/skill">
         <Skill></Skill>
          </Route>
          
          <Route path="/About">
        <About></About>
          </Route>
          <Route path="*">
        <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
   
    </div>
  );
}

export default App;
