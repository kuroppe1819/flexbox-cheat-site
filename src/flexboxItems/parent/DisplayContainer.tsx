import React, { ReactElement, useCallback } from 'react';
import { FlexboxItemsProps } from 'src/@types/flexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForParent } from '../../common/util/CreateCssCode';

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/display';

export const DisplayContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened, setReference } = props;

    const parentStyleContents = `display: ${propertyValue};`;

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
            parentStyle={parentStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
