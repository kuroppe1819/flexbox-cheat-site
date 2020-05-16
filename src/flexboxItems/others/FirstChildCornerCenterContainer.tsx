import React, { ReactElement, useCallback } from 'react';
import { FlexboxItemsForOthersProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForFirstChild, createCssCodeForParent } from '../../common/util/CreateCssCode';

const parentStyleContents = `display: flex;
    justify-content: center;
    position: relative`;

const firstChildStyleContens = `position: absolute;
    top: 0;
    left: 0;
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

export const FirstChildToCornerCenterContainer = (props: FlexboxItemsForOthersProps): ReactElement => {
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
            propertyValue={`center & leftmost`}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
