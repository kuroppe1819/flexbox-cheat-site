import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import '../static/css/style.css';
import { Footer } from './common/components/Footer';
import { Header } from './common/components/Header';
import { TopContainer } from './pages/Top/TopContainer';
import { Terms } from './pages/Terms/Terms';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { Contact } from './pages/Contact/Contact';
import { ScrollToTop } from './common/util/ScrollToTop';
import { Normalize } from 'styled-normalize';

export const Index = (): ReactElement => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <ScrollToTop />
            <Switch>
                <Route exact path="/">
                    <TopContainer />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
                <Route path="/privacy">
                    <PrivacyPolicy />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

library.add(fab, fas, far);
SyntaxHighlighter.registerLanguage('css', css);
ReactDOM.render(
    <>
        <Normalize />
        <Index />
    </>,
    document.getElementById('root')
);
