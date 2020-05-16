import React, { ReactElement, useCallback } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import {
    createCssCodeForParent,
    createCssCodeForChild,
    createCssCodeForChildFeatured,
} from '../../common/util/CreateCssCode';

const parentStyleContents = `display: flex;
    align-items: flex-start;`;

const childStyleContents = `width: 40%;`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const childStyleCode = createCssCodeForChild(childStyleContents);

const parentStyle = css`
    ${parentStyleContents}
`;
const childStyle = css`
    ${childStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/flex-shrink';

export const FlexShrinkContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened, setReference } = props;

    const childFeaturedStyleContents = `flex-shrink: ${propertyValue};
    background-color: #2b6cb0;`;

    const childFeaturedCode = createCssCodeForChildFeatured(childFeaturedStyleContents);

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${childStyleCode}\n\n${childFeaturedCode}`);
        setOpened(true);
        setReference(reference);
    }, [childFeaturedCode, setFlexboxItemsStyle, setOpened, setReference]);

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
