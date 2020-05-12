import React, { ReactElement } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForFirstChild } from '../../common/util/CreateCssCode';

export const FirstChildToCornerContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
    const { setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;`;

    const firstChildStyleContens = `margin-right: auto;
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
