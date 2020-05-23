import React, { ReactElement } from 'react';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForLastChild, createCssCodeForParent } from '../../../createCode/CreateCssCode';
import { Color } from '../../../util/DefineProperty';

const parentStyleContents = `display: flex;
    justify-content: center;
    position: relative`;

const lastChildStyleContens = `position: absolute;
    top: 0;
    right: 0;
    background-color: ${Color.blue700};`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const lastChildStyleCode = createCssCodeForLastChild(lastChildStyleContens);

const parentStyle = css`
    ${parentStyleContents}
`;

const lastChildStyle = css`
    ${lastChildStyleContens}
`;

const reference = '';

export const LastChildToCornerCenterContainer = (): ReactElement => {
    const mergeStyleCode = `${parentStyleCode}\n\n${lastChildStyleCode}`;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            lastChildStyle={lastChildStyle}
            propertyValue={`center & rightmost`}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
