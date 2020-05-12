import React, { ReactElement } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent } from '../../common/util/CreateCssCode';

export const JustifyContentContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened } = props;

    const parentStyleContents = `display: flex;
    justify-content: ${propertyValue};`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);

    const onClickBoxHandler = (): void => {
        setFlexboxItemsStyle(parentStyleCode);
        setOpened(true);
    };

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
