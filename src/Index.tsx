import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './pages/Index';

library.add(faTwitter, faGithub);

ReactDOM.render(<Index />, document.getElementById('root'));
