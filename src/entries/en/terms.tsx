import React from 'react';
import ReactDOM from 'react-dom';
import { LANGUAGE } from '../../components/providers/CustomIntlProvider';
import { Terms } from '../../pages/Terms';

ReactDOM.render(<Terms language={LANGUAGE.en} />, document.getElementById('root'));
