import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import {
    createCssCodeForChild,
    createCssCodeForChildFeatured,
    createCssCodeForParent,
} from '../../../createCode/CreateCssCode';
import { ThemeColor } from '../../../util/DefineProperty';

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
    const { propertyValue } = props;

    const childFeaturedStyleContents = `flex-shrink: ${propertyValue};
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

    const childFeaturedCode = createCssCodeForChildFeatured(childFeaturedStyleContents);
    const mergeStyleCode = `${parentStyleCode}\n\n${childStyleCode}\n\n${childFeaturedCode}`;

    const childFeaturedStyle = css`
        ${childFeaturedStyleContents}
    `;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            childStyle={childStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={propertyValue}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
