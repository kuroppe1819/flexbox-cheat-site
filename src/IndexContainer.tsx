import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './Index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import 'normalize.css';
import '../static/css/style.css';

library.add(fab, fas, far);
ReactDOM.render(<Index />, document.getElementById('root'));
