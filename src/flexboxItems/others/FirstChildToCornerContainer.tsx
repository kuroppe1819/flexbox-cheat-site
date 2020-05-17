import React, { ReactElement, useState, useCallback } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/FlexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForFirstChild } from '../../common/util/CreateCssCode';
import { ThemeColor } from '../../common/util/DefineProperty';

const parentStyleContents = `display: flex;`;

const firstChildStyleContens = `margin-right: auto;
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);
const firstChildStyleCode = createCssCodeForFirstChild(firstChildStyleContens);

const parentStyle = css`
    ${parentStyleContents}
`;
const firstChildStyle = css`
    ${firstChildStyleContens}
`;

const reference = '';

export const FirstChildToCornerContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
    const { setFlexboxItemsStyle, setOpened, setReference } = props;

    const [isMouseEnter, setMouseEnter] = useState(false);

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${firstChildStyleCode}`);
        setOpened(true);
        setReference(reference);
    }, [setFlexboxItemsStyle, setOpened, setReference]);

    return (
        <BehaviorFlexbox
            isMouseEnter={isMouseEnter}
            setMouseEnter={setMouseEnter}
            parentStyle={parentStyle}
            firstChildStyle={firstChildStyle}
            propertyValue="leftmost"
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
