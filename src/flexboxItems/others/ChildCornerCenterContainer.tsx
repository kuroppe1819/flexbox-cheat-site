import React, { ReactElement } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import {
    createCssCodeForParent,
    createCssCodeForFirstChild,
    createCssCodeForLastChild,
} from '../../common/util/CreateCssCode';

export const ChildToCornerCenterContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
    const { setFlexboxItemsStyle } = props;

    const parentStyleContents = `display: flex;
    justify-content: center;`;

    const firstChildStyleContens = `position: relative;
    right: 16px;
    background-color: #2b6cb0;`;

    const lastChildStyleContens = `position: relative;
    left: 16px;
    background-color: #2b6cb0;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);
    const firstChildStyleCode = createCssCodeForFirstChild(firstChildStyleContens);
    const lastChildStyleCode = createCssCodeForLastChild(lastChildStyleContens);

    const onClickBoxHandler = (): void =>
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${firstChildStyleCode}\n\n${lastChildStyleCode}`);
    const parentStyle = css`
        ${parentStyleContents}
    `;
    const firstChildStyle = css`
        ${firstChildStyleContens}
    `;
    const lastChildStyle = css`
        ${lastChildStyleContens}
    `;
    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            firstChildStyle={firstChildStyle}
            lastChildStyle={lastChildStyle}
            propertyValue={`.first&last-child`}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
