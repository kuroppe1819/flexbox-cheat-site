import React from 'react';
import ReactDOM from 'react-dom';
import { LANGUAGE } from '../components/providers/CustomIntlProvider';
import { Page } from '../pages/terms/Page';

ReactDOM.render(<Page language={LANGUAGE.ja} />, document.getElementById('root'));
