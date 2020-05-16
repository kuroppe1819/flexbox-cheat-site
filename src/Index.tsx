import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'normalize.css';
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import '../static/css/style.css';
import { Footer } from './common/components/Footer';
import { Header } from './common/components/Header';
import { MainContentsContainer } from './pages/MainContents/MainContentsContainer';

export const Index = (): ReactElement => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/">
                    <MainContentsContainer />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

library.add(fab, fas, far);
SyntaxHighlighter.registerLanguage('css', css);
ReactDOM.render(<Index />, document.getElementById('root'));
