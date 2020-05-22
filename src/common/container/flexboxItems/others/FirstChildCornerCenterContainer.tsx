import React, { ReactElement } from 'react';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForFirstChild, createCssCodeForParent } from '../../../util/CreateCssCode';
import { ThemeColor } from '../../../util/DefineProperty';

const parentStyleContents = `display: flex;
    justify-content: center;
    position: relative`;

const firstChildStyleContens = `position: absolute;
    top: 0;
    left: 0;
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const firstChildStyleCode = createCssCodeForFirstChild(firstChildStyleContens);

const parentStyle = css`
    ${parentStyleContents}
`;

const firstChildStyle = css`
    ${firstChildStyleContens}
`;

const reference = '';

export const FirstChildToCornerCenterContainer = (): ReactElement => {
    const mergeStyleCode = `${parentStyleCode}\n\n${firstChildStyleCode}`;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            firstChildStyle={firstChildStyle}
            propertyValue={`center & leftmost`}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
