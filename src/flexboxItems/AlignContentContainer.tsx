import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForChild } from '../common/util/CreateCssCode';

export const AlignContentContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;
    flex-wrap: wrap;
    align-content: ${propertyValue};
    height: 100%;`;

    const childStyleContents = `width: 30%;`;

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
