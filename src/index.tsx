import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight, faBook, faCopy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './pages/Index';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';

library.add(faTwitter, faGithub, faAngleDoubleLeft, faAngleDoubleRight, faCopy, faBook);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('markdown', markdown);
ReactDOM.render(<Index />, document.getElementById('root'));
