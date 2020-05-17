import React, { ReactElement, useState, useCallback } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/FlexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForFirstChild, createCssCodeForParent } from '../../common/util/CreateCssCode';
import { ThemeColor } from '../../common/util/DefineProperty';

const parentStyleContents = `display: flex;
    justify-content: center;
    position: relative`;

const firstChildStyleContens = `position: absolute;
    top: 0;
    left: 0;
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

export const FirstChildToCornerCenterContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
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
            propertyValue={`center & leftmost`}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
