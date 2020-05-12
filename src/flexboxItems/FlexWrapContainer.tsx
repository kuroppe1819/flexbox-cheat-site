import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForChild } from '../common/util/CreateCssCode';

export const FlexWrapContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;
    align-items: flex-start;
    flex-wrap: ${propertyValue};
    height: 100%;`;

    const childStyleContents = `width: 40%;`;

    const parentStyleCssCode = createCssCodeForParent(parentStyleContents);
    const childStyleCssCode = createCssCodeForChild(childStyleContents);
    const onClickBoxHandler = (): void => setFlexboxItemsStyle(`${parentStyleCssCode}\n\n${childStyleCssCode}`);
    const parentStyle = css`
        ${parentStyleContents}
    `;
    const childStyle = css`
        ${childStyleContents}
    `;
    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            childStyle={childStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
