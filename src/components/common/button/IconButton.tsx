import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { BaseButton, ButtonProps } from './BaseButton';

export type IconButtonProps = {
    children: React.ReactNode;
    assistiveText: string;
} & Omit<ButtonProps, 'className' | 'title'> &
    AppendClassName;

const Component: React.VFC<IconButtonProps & StyledProps> = ({
    className,
    children,
    appendClassName,
    assistiveText,
    type = 'button',
    disabled,
    onClick,
    ...others
}) => (
    <BaseButton
        className={clsx(className, appendClassName)}
        type={type}
        title={assistiveText}
        disabled={disabled}
        onClick={onClick}
        aria-label={assistiveText}
        {...others}
    >
        {children}
    </BaseButton>
);

const StyledComponent: React.VFC<IconButtonProps> = styled(Component)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;

export const IconButton = StyledComponent;
