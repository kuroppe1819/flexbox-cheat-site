import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import React, { ReactElement } from 'react';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../common/components/BehaviorFlexbox';
import { createCssCodeForParent } from '../common/util/CreateCssCode';

export const FlexWrapContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;
    align-items: flex-start;
    flex-wrap: ${propertyValue};
    height: 100%;`;

    const childStyleContents = `width: 40%;`;

    const parentStyleCssCode = createCssCodeForParent(parentStyleContents);
    const onClickBoxHandler = (): void => setFlexboxItemsStyle(parentStyleCssCode);
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
