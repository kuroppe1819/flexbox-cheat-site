import { FlexboxItemsProps } from '@types/flexboxItems';
import React, { ReactElement } from 'react';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../common/components/BehaviorFlexbox';
import { createCssCodeForParent } from '../common/util/CreateCssCode';

export const AlignItemsContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;
    align-items: ${propertyValue};
    height: 100%;`;

    const parentStyleCssCode = createCssCodeForParent(parentStyleContents);
    const onClickBoxHandler = (): void => setFlexboxItemsStyle(parentStyleCssCode);
    const parentStyle = css`
        ${parentStyleContents}
    `;

    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
