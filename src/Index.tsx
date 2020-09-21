import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './pages/Index';

library.add(faTwitter, faGithub, faAngleDoubleLeft, faAngleDoubleRight, faWindowRestore);
ReactDOM.render(<Index />, document.getElementById('root'));
