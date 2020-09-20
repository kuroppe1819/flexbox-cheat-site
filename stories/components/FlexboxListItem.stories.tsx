import React from 'react';
import { FlexboxListItem } from '../../src/components/FlexboxListItem';

export default {
    title: 'components/FlexboxListItem',
};

export const Normal = () => <FlexboxListItem id={'display-flex'} propertyValue={'flex'} isHighlight={false} />;

export const Highlight = () => <FlexboxListItem id={'hoge'} propertyValue={'flex'} isHighlight />;
