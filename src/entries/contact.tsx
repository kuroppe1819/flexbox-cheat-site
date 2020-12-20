import React from 'react';
import ReactDOM from 'react-dom';
import { LANGUAGE } from '../components/providers/CustomIntlProvider';
import { Contact } from '../pages/Contact';

ReactDOM.render(<Contact language={LANGUAGE.ja} />, document.getElementById('root'));
