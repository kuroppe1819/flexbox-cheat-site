import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForChild, createCssCodeForParent } from '../../../util/CreateCssCode';

const childStyleContents = `width: 40%;`;

const childStyleCode = createCssCodeForChild(childStyleContents);

const childStyle = css`
    ${childStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/flex-wrap';

export const FlexWrapContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue } = props;

    const parentStyleContents = `display: flex;
    align-items: flex-start;
    flex-wrap: ${propertyValue};
    height: 100%;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);
    const mergeStyleCode = `${parentStyleCode}\n\n${childStyleCode}`;

    const parentStyle = css`
        ${parentStyleContents}
    `;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            childStyle={childStyle}
            propertyValue={propertyValue}
            uniqueCode={mergeStyleCode}
            uniqueReference={reference}
        />
    );
};
