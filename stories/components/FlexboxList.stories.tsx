import React from 'react';
import { FlexboxList } from '../../src/components/FlexboxList';
import { getFlexboxProperty } from '../../src/fixtures/functions/dataProvider';

export default {
    title: 'components/FlexboxList',
};

export const Normal = () => (
    <FlexboxList propertyName={'display'} propertyInfoList={getFlexboxProperty('display').infoList} />
);
