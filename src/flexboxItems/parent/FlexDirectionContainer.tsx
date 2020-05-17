import React, { ReactElement, useState, useCallback } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent } from '../../common/util/CreateCssCode';

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/flex-direction';

export const FlexDirectionContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened, setReference } = props;

    const [isMouseEnter, setMouseEnter] = useState(false);

    const parentStyleContents = `display: flex;
    flex-direction: ${propertyValue};
    height: 100%;`;

    const parentStyleCode = createCssCodeForParent(parentStyleContents);

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}`);
        setOpened(true);
        setReference(reference);
    }, [parentStyleCode, setFlexboxItemsStyle, setOpened, setReference]);

    const parentStyle = css`
        ${parentStyleContents}
    `;

    return (
        <BehaviorFlexbox
            isMouseEnter={isMouseEnter}
            setMouseEnter={setMouseEnter}
            parentStyle={parentStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
