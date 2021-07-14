import './css/App.scss';

import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './routes/Home';
import Work from './routes/Work';
import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/work">
                    <Work />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
