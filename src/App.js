import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Container/Home';
import About from './Container/About';
import { Route } from 'react-router-dom';
import Contact from './Container/Contact';
import Service from './Container/Service';
import Testmonial from './Container/Testmonial';
import { Switch } from 'react-router-dom';
import Team from './Container/Team';
import Menu from './Container/Menu';

function App() {
  return (
    <>
    <Header />
    <Switch>
    {/* <Home /> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/testmonial" component={Testmonial} />
    <Route exact path="/team" component={Team} />
    <Route exact path="/menu" component={Menu} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
