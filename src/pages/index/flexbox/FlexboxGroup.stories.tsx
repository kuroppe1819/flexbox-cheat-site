import React from 'react';
import { getFlexboxProperty } from '../../../fixtures/functions/extractData';
import { FlexboxGroup } from './FlexboxGroup';

export default {
    title: 'pages/index/flexbox/FlexboxGroup',
};

export const Normal = () => (
    <FlexboxGroup propertyName={'display'} propertyInfoList={getFlexboxProperty('display').infoList} />
);
