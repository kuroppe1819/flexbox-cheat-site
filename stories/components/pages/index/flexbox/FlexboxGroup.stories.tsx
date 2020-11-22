import React from 'react';
import { FlexboxGroup } from '../../../../../src/components/index/flexbox/FlexboxGroup';
import { getFlexboxProperty } from '../../../../../src/fixtures/functions/dataProvider';

export default {
    title: 'components/pages/index/flexbox/FlexboxGroup',
};

export const Normal = () => (
    <FlexboxGroup propertyName={'display'} propertyInfoList={getFlexboxProperty('display').infoList} />
);
