import React, { ReactElement, useCallback } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForChildFeatured, createCssCodeForParent } from '../../common/util/CreateCssCode';

const parentStyleContents = `display: flex;
    height: 100%;`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);

const parentStyle = css`
    ${parentStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/align-self';

export const AlignSelfContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened, setReference } = props;

    const childFeaturedStyleContents = `align-self: ${propertyValue};
    background-color: #2b6cb0;`;

    const childFeaturedCode = createCssCodeForChildFeatured(childFeaturedStyleContents);

    const childFeaturedStyle = css`
        ${childFeaturedStyleContents}
    `;

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${childFeaturedCode}`);
        setOpened(true);
        setReference(reference);
    }, [childFeaturedCode, setFlexboxItemsStyle, setOpened, setReference]);

    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
