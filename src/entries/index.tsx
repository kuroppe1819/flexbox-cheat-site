import React from 'react';
import ReactDOM from 'react-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';
import { LANGUAGE } from '../components/providers/CustomIntlProvider';
import { serviceWorkerRegistration } from '../fixtures/functions/serviceWorkerRegistration';
import { Page } from '../pages/index/Page';

SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('markdown', markdown);
ReactDOM.render(<Page language={LANGUAGE.ja} />, document.getElementById('root'));

serviceWorkerRegistration.register();
