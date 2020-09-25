import React from 'react';
import { StyledComponent as FlexboxListItem } from '../../src/components/FlexboxListItem';
import { action } from '@storybook/addon-actions';
import { getFlexboxPropertyInfoById } from '../../src/fixtures/functions/dataProvider';

export default {
    title: 'components/FlexboxListItem',
};

export const Normal = () => {
    const id = 'display_flex';
    return (
        <FlexboxListItem
            id={id}
            selectedFlexboxPropertyId={null}
            mouseOverFlexboxListItemId={null}
            propertyInfo={getFlexboxPropertyInfoById(id)}
            onClickItem={action('on click item')}
            onMouseEnter={action('on mouse enter')}
            onMouseLeave={action('on mouse leave')}
        />
    );
};

export const Selected = () => {
    const id = 'display_flex';
    return (
        <FlexboxListItem
            id={id}
            selectedFlexboxPropertyId={id}
            mouseOverFlexboxListItemId={null}
            propertyInfo={getFlexboxPropertyInfoById(id)}
            onClickItem={action('on click item')}
            onMouseEnter={action('on mouse enter')}
            onMouseLeave={action('on mouse leave')}
        />
    );
};

export const MouseOver = () => {
    const id = 'display_flex';
    return (
        <FlexboxListItem
            id={id}
            selectedFlexboxPropertyId={null}
            mouseOverFlexboxListItemId={id}
            propertyInfo={getFlexboxPropertyInfoById(id)}
            onClickItem={action('on click item')}
            onMouseEnter={action('on mouse enter')}
            onMouseLeave={action('on mouse leave')}
        />
    );
};
