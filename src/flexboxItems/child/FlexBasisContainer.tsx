import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForChildFeatured } from '../../common/util/CreateCssCode';

export const FlexBasisContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened } = props;

    const parentStyleContents = `display: flex;
    flex-wrap: wrap;`;

    const childFeaturedStyleContents = `flex-basis: ${propertyValue};
    background-color: #2b6cb0;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);
    const childFeaturedCode = createCssCodeForChildFeatured(childFeaturedStyleContents);

    const onClickBoxHandler = (): void => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${childFeaturedCode}`);
        setOpened(true);
    };

    const parentStyle = css`
        ${parentStyleContents}
    `;
    const childFeaturedStyle = css`
        ${childFeaturedStyleContents}
    `;

    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
