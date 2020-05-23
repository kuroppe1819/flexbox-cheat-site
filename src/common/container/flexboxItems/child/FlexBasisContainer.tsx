import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForChildFeatured, createCssCodeForParent } from '../../../createCode/CreateCssCode';
import { Color } from '../../../util/DefineProperty';

const parentStyleContents = `display: flex;
    flex-wrap: wrap;`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);

const parentStyle = css`
    ${parentStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/flex-basis';

export const FlexBasisContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue } = props;

    const childFeaturedStyleContents = `flex-basis: ${propertyValue};
    background-color: ${Color.blue700};`;

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
