import './css/App.scss';

import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useRef, Suspense } from 'react';

import Page from './components/UI/Page';
import Header from './components/header/Header';

import Footer from './components/footer/Footer';
import { AnimatePresence } from 'framer-motion';

const Home = React.lazy(() => import('./routes/Home'));
const Work = React.lazy(() => import('./routes/Work'));
const WorkDetail = React.lazy(() => import('./routes/WorkDetail'));

const About = React.lazy(() => import('./routes/About'));

function App() {
    const appRef = useRef();
    const openMobileMenuHandler = () => {
        appRef.current.classList.remove('App__closeMobileMenu');
        appRef.current.classList.add('App__openMobileMenu');
    };

    const closeMobileMenuHandler = () => {
        appRef.current.classList.remove('App__openMobileMenu');
        appRef.current.classList.add('App__closeMobileMenu');
    };

    return (
        <div className="App" ref={appRef}>
            <Header
                onOpenMobileMenu={openMobileMenuHandler}
                onCloseMobileMenu={closeMobileMenuHandler}
            />
            <div className="App__main">
                <Suspense fallback={<p>loading...</p>}>
                    <AnimatePresence>
                        <Switch>
                            <Route
                                path="/"
                                render={props => (
                                    <Page title="Home">
                                        <Home {...props} />
                                    </Page>
                                )}
                                exact
                            ></Route>
                            <Route
                                path="/work"
                                render={props => (
                                    <Page title="Works">
                                        <Work {...props} />
                                    </Page>
                                )}
                                exact
                            ></Route>
                            <Route
                                path="/work/:workId"
                                render={props => (
                                    <Page title="Works Detail">
                                        <WorkDetail {...props} />
                                    </Page>
                                )}
                            ></Route>
                            <Route
                                path="/about"
                                render={props => (
                                    <Page title="About">
                                        <About {...props} />
                                    </Page>
                                )}
                            ></Route>

                            <Route path="*">
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default App;
