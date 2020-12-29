import React from 'react';
import ReactDOM from 'react-dom';
import { LANGUAGE } from '../../components/providers/CustomIntlProvider';
import { Page } from '../../pages/contact/Page';

ReactDOM.render(<Page language={LANGUAGE.en} />, document.getElementById('root'));
