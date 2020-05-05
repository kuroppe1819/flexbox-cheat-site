import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './common/components/Footer';
import { Header } from './common/components/Header';
import { MainContents } from './pages/MainContents';

export const Index = (): ReactElement => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/">
                    <MainContents />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};
