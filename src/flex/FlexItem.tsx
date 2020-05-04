import React, { ReactElement } from 'react';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../common/components/BehaviorFlexbox';

export const flexStyle = `display: flex`;

export const FlexItem = (): ReactElement => {
    const style = css`
        ${flexStyle}
    `;

    return (
        <div>
            <BehaviorFlexbox style={style} propertyName="flex" />
        </div>
    );
};
