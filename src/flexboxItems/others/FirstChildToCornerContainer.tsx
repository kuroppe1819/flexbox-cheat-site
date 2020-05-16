import React, { ReactElement, useCallback } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent, createCssCodeForFirstChild } from '../../common/util/CreateCssCode';

const parentStyleContents = `display: flex;`;

const firstChildStyleContens = `margin-right: auto;
    background-color: #2b6cb0;`;

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

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${firstChildStyleCode}`);
        setOpened(true);
        setReference(reference);
    }, [setFlexboxItemsStyle, setOpened, setReference]);

    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            firstChildStyle={firstChildStyle}
            propertyValue=".first-child"
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
