import React from 'react';
import { getFlexboxProperty } from '../../../fixtures/functions/dataProvider';
import { FlexboxGroup } from './FlexboxGroup';

export default {
    title: 'components/pages/index/flexbox/FlexboxGroup',
};

export const Normal = () => (
    <FlexboxGroup propertyName={'display'} propertyInfoList={getFlexboxProperty('display').infoList} />
);
