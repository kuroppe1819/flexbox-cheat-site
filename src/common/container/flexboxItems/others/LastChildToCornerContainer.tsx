import React, { ReactElement } from 'react';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForLastChild, createCssCodeForParent } from '../../../createCode/CreateCssCode';
import { ThemeColor } from '../../../util/DefineProperty';

const parentStyleContents = `display: flex;
    height: 100%`;

const lastChildStyleContens = `margin-left: auto;
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const lastChildStyleCode = createCssCodeForLastChild(lastChildStyleContens);

const parentStyle = css`
    ${parentStyleContents}
`;
const lastChildStyle = css`
    ${lastChildStyleContens}
`;

const reference = '';

export const LastChildToCornerContainer = (): ReactElement => {
    const mergeStyleCode = `${parentStyleCode}\n\n${lastChildStyleCode}`;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            lastChildStyle={lastChildStyle}
            propertyValue={`rightmost`}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
