import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { BehaviorFlexboxContainer } from '../../common/BehaviorFlexboxContainer';
import { css } from 'styled-components';
import { createCssCodeForParent } from '../../../createCode/CreateCssCode';

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/align-items';

export const AlignItemsContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue } = props;

    const parentStyleContents = `display: flex;
    align-items: ${propertyValue};
    height: 100%;`;

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
