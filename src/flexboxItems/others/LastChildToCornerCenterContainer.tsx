import React, { ReactElement } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForLastChild } from '../../common/util/CreateCssCode';

export const LastChildToCornerCenterContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
    const { setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;
    justify-content: center;
    height: 100%`;

    const lastChildStyleContens = `position: relative;
    left: 16px;
    background-color: #2b6cb0;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);
    const lastChildStyleCode = createCssCodeForLastChild(lastChildStyleContens);
    const onClickBoxHandler = (): void => setFlexboxItemsStyle(`${parentStyleCode}\n\n${lastChildStyleCode}`);
    const parentStyle = css`
        ${parentStyleContents}
    `;
    const lastChildStyle = css`
        ${lastChildStyleContens}
    `;
    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            lastChildStyle={lastChildStyle}
            propertyValue=".last-child"
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
