import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';

const Component: React.FC<StyledProps> = ({ className, children }) => {
    if (React.isValidElement(children)) {
        const childClassName = children.props.className;
        return React.cloneElement(children, {
            className: clsx(`${className}__assistiveText`, { [`${childClassName}`]: childClassName }),
        });
    }
    throw new Error('The children are not React Elements.');
};

const StyledComponent: React.FC = styled(Component)`
    &__assistiveText {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }
`;

export const AssistiveText = StyledComponent;
