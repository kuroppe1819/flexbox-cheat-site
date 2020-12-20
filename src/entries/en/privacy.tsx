import React from 'react';
import ReactDOM from 'react-dom';
import { LANGUAGE } from '../../components/providers/CustomIntlProvider';
import { Privacy } from '../../pages/Privacy';

ReactDOM.render(<Privacy language={LANGUAGE.en} />, document.getElementById('root'));
