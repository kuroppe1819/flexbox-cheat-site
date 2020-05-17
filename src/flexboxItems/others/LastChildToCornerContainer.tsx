import React, { ReactElement, useState, useCallback } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/FlexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForLastChild } from '../../common/util/CreateCssCode';
import { ThemeColor } from '../../common/util/DefineProperty';

const parentStyleContents = `display: flex;
    height: 100%`;

const lastChildStyleContens = `margin-left: auto;
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

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

    const [isMouseEnter, setMouseEnter] = useState(false);

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${lastChildStyleCode}`);
        setOpened(true);
        setReference(reference);
    }, [setFlexboxItemsStyle, setOpened, setReference]);

    return (
        <BehaviorFlexbox
            isMouseEnter={isMouseEnter}
            setMouseEnter={setMouseEnter}
            parentStyle={parentStyle}
            lastChildStyle={lastChildStyle}
            propertyValue="rightmost"
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
