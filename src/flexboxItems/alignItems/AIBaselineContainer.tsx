import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { createCssCodeForParent } from '../../common/util/CreateCssCode';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { css } from 'styled-components';

type Props = {
    setParentStyle: Dispatch<SetStateAction<string>>;
};

const PROPERTY_NAME = 'baseline';

const PARENT_STYLE_CONTENTS = `display: flex;
    align-items: baseline;
    height: 100%;`;

export const AIBaselineContainer = (props: Props): ReactElement => {
    const parentStyleCssCode = createCssCodeForParent(PARENT_STYLE_CONTENTS);
    const onClickBoxHandler = (): void => props.setParentStyle(parentStyleCssCode);
    const parentStyle = css`
        ${PARENT_STYLE_CONTENTS}
    `;
    return (
        <BehaviorFlexbox parentStyle={parentStyle} propertyName={PROPERTY_NAME} onClickBoxHandler={onClickBoxHandler} />
    );
};
