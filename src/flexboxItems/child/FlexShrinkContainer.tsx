import React, { ReactElement, useCallback, useState } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import {
    createCssCodeForChild,
    createCssCodeForChildFeatured,
    createCssCodeForParent,
} from '../../common/util/CreateCssCode';
import { ThemeColor } from '../../common/util/ThemeColor';

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

    const [isMouseEnter, setMouseEnter] = useState(false);

    const childFeaturedStyleContents = `flex-shrink: ${propertyValue};
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

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
            isMouseEnter={isMouseEnter}
            setMouseEnter={setMouseEnter}
            parentStyle={parentStyle}
            childStyle={childStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
