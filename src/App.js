import './App.scss';

import Header from './components/header/Header';
import Home from './routes/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}

export default App;
