import React, { ReactElement } from 'react';
import { css } from 'styled-components';
import { createCssCodeForChildFeatured, createCssCodeForParent } from '../../../createCode/CreateCssCode';
import { Color } from '../../../util/DefineProperty';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';

const parentStyleContents = `display: flex;
    height: 100%`;

const childFeaturedStyleContens = `margin-left: auto;
    background-color: ${Color.blue700};`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const childFeaturedStyleCode = createCssCodeForChildFeatured(childFeaturedStyleContens);

const parentStyle = css`
    ${parentStyleContents}
`;
const childFeaturedStyle = css`
    ${childFeaturedStyleContens}
`;

const reference = '';

export const SpaceCenterContainer = (): ReactElement => {
    const mergeStyleCode = `${parentStyleCode}\n\n${childFeaturedStyleCode}`;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={`space center`}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
