import React, { ReactElement } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForFirstChild } from '../../common/util/CreateCssCode';

export const FirstChildToCornerCenterContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
    const { setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;
    justify-content: center;`;

    const firstChildStyleContens = `position: relative;
    right: 16px;
    background-color: #2b6cb0;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);
    const firstChildStyleCode = createCssCodeForFirstChild(firstChildStyleContens);
    const onClickBoxHandler = (): void => setFlexboxItemsStyle(`${parentStyleCode}\n\n${firstChildStyleCode}`);
    const parentStyle = css`
        ${parentStyleContents}
    `;
    const firstChildStyle = css`
        ${firstChildStyleContens}
    `;
    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            firstChildStyle={firstChildStyle}
            propertyValue=".first-child"
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
