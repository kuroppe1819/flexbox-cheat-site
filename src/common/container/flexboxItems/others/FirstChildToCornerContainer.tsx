import React, { ReactElement } from 'react';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForFirstChild, createCssCodeForParent } from '../../../createCode/CreateCssCode';
import { Color } from '../../../util/DefineProperty';

const parentStyleContents = `display: flex;`;

const firstChildStyleContens = `margin-right: auto;
    background-color: ${Color.blue700};`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const firstChildStyleCode = createCssCodeForFirstChild(firstChildStyleContens);

const parentStyle = css`
    ${parentStyleContents}
`;
const firstChildStyle = css`
    ${firstChildStyleContens}
`;

const reference = '';

export const FirstChildToCornerContainer = (): ReactElement => {
    const mergeStyleCode = `${parentStyleCode}\n\n${firstChildStyleCode}`;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            firstChildStyle={firstChildStyle}
            propertyValue={`leftmost`}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
