import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForChild, createCssCodeForParent } from '../../../util/CreateCssCode';

const childStyleContents = `width: 30%;`;

const childStyleCode = createCssCodeForChild(childStyleContents);

const childStyle = css`
    ${childStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/align-content';

export const AlignContentContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue } = props;

    const parentStyleContents = `display: flex;
    flex-wrap: wrap;
    align-content: ${propertyValue};
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
