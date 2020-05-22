import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForChildFeatured, createCssCodeForParent } from '../../../util/CreateCssCode';
import { ThemeColor } from '../../../util/DefineProperty';

const parentStyleContents = `display: flex;
    align-items: flex-start;`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);

const parentStyle = css`
    ${parentStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/flex-grow';

export const FlexGrowContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue } = props;

    const childFeaturedStyleContents = `flex-grow: ${propertyValue};
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
