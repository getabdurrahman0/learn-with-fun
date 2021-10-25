import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Teachers from './components/Teachers/Teachers';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route exact path="/">
                <Home></Home>
           </Route>
           <Route exact path="/home">
                <Home></Home>
           </Route>
           <Route exact path="/services">
                <Services></Services>
           </Route>
           <Route exact path="/about">
                <About></About>
           </Route>
           <Route exact path="/teachers">
                <Teachers></Teachers>
           </Route>
           <Route exact path="*">
                <NotFound></NotFound>
           </Route>

         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
