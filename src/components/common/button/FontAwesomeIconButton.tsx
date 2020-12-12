import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { BaseButton, ButtonProps } from './BaseButton';

export type FontAwesomeIconButtonProps = {
    assistiveText: string;
    icon: IconProp;
    iconSize: SizeProp;
} & Omit<ButtonProps, 'className' | 'title'> &
    AppendClassName;

const Component: React.FC<FontAwesomeIconButtonProps & StyledProps> = ({
    className,
    appendClassName,
    assistiveText,
    icon,
    iconSize,
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
        <FontAwesomeIcon role="img" icon={icon} size={iconSize} />
    </BaseButton>
);

const StyledComponent: React.FC<FontAwesomeIconButtonProps> = styled(Component)`
    border: none;
`;

export const FontAwesomeIconButton = StyledComponent;
