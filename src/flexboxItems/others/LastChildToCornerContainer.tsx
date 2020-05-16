import React, { ReactElement, useCallback } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForLastChild } from '../../common/util/CreateCssCode';

const parentStyleContents = `display: flex;
    height: 100%`;

const lastChildStyleContens = `margin-left: auto;
    background-color: #2b6cb0;`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const lastChildStyleCode = createCssCodeForLastChild(lastChildStyleContens);

const parentStyle = css`
    ${parentStyleContents}
`;
const lastChildStyle = css`
    ${lastChildStyleContens}
`;

const reference = '';

export const LastChildToCornerContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
    const { setFlexboxItemsStyle, setOpened, setReference } = props;

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${lastChildStyleCode}`);
        setOpened(true);
        setReference(reference);
    }, [setFlexboxItemsStyle, setOpened, setReference]);

    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            lastChildStyle={lastChildStyle}
            propertyValue="rightmost"
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
