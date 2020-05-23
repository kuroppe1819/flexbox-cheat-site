import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForParent } from '../../../createCode/CreateCssCode';

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/justify-content';

export const JustifyContentContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue } = props;

    const parentStyleContents = `display: flex;
    justify-content: ${propertyValue};`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);

    const parentStyle = css`
        ${parentStyleContents}
    `;

    return (
        <BehaviorFlexboxContainer
            parentStyle={parentStyle}
            propertyValue={propertyValue}
            uniqueCode={parentStyleCode}
            uniqueReference={reference}
        />
    );
};
