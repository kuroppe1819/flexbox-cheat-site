import React from 'react';
import { FlexboxGroup } from '../../src/components/FlexboxGroup';
import { getFlexboxProperty } from '../../src/fixtures/functions/dataProvider';

export default {
    title: 'components/FlexboxGroup',
};

export const Normal = () => (
    <FlexboxGroup propertyName={'display'} propertyInfoList={getFlexboxProperty('display').infoList} />
);
