import React from 'react';
import { NumberBlock } from './NumberBlock';

export default {
    title: 'pages/index/flexbox/NumberBlock',
};

// TODO: 横幅が長い時と短いときの見た目を表示する
export const Number1 = () => <NumberBlock number={1} />;

export const Number2 = () => <NumberBlock number={2} />;
