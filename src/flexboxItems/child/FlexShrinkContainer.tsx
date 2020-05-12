import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import {
    createCssCodeForParent,
    createCssCodeForChild,
    createCssCodeForChildFeatured,
} from '../../common/util/CreateCssCode';

export const FlexShrinkContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened } = props;

    const parentStyleContents = `display: flex;
    align-items: flex-start;`;

    const childStyleContents = `width: 40%;`;

    const childFeaturedStyleContents = `flex-shrink: ${propertyValue};
    background-color: #2b6cb0;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);
    const childStyleCode = createCssCodeForChild(childStyleContents);
    const childFeaturedCode = createCssCodeForChildFeatured(childFeaturedStyleContents);

    const onClickBoxHandler = (): void => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${childStyleCode}\n\n${childFeaturedCode}`);
        setOpened(true);
    };

    const parentStyle = css`
        ${parentStyleContents}
    `;
    const childStyle = css`
        ${childStyleContents}
    `;
    const childFeaturedStyle = css`
        ${childFeaturedStyleContents}
    `;

    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            childStyle={childStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
