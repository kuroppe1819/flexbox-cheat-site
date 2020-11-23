import React, { AriaAttributes } from 'react';
import styled from 'styled-components';
import 'focus-visible';

export type ButtonProps = {
    className: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    AriaAttributes;

const Component: React.FC<ButtonProps> = ({
    className,
    children,
    type,
    title,
    disabled = false,
    onClick,
    ...others
}) => (
    <button className={className} type={type} title={title} onClick={onClick} disabled={disabled} {...others}>
        {children}
    </button>
);

const StyledComponent: React.FC<ButtonProps> = styled(Component)`
    cursor: pointer;

    &:focus:not(.focus-visible) {
        outline: none;
    }
`;

export const BaseButton = StyledComponent;
