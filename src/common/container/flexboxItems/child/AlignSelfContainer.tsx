import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { createCssCodeForChildFeatured, createCssCodeForParent } from '../../../util/CreateCssCode';
import { ThemeColor } from '../../../util/DefineProperty';

const parentStyleContents = `display: flex;
    height: 100%;`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);

const parentStyle = css`
    ${parentStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/align-self';

export const AlignSelfContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue } = props;

    const childFeaturedStyleContents = `align-self: ${propertyValue};
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

    const childFeaturedCode = createCssCodeForChildFeatured(childFeaturedStyleContents);
    const mergeStyleCode = `${parentStyleCode}\n\n${childFeaturedCode}`;

    const childFeaturedStyle = css`
        ${childFeaturedStyleContents}
    `;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={propertyValue}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
