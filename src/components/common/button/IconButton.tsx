import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { AssistiveText } from '../assistiveText/AssistiveText';
import { BaseButton, ButtonProps } from './BaseButton';

export type IconButtonProps = {
    assistiveText: string;
    icon: IconProp;
    iconSize: SizeProp;
} & Omit<ButtonProps, 'className' | 'title'> &
    AppendClassName;

const Component: React.FC<IconButtonProps & StyledProps> = ({
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
        {...others}
    >
        <AssistiveText>
            <span>{assistiveText}</span>
        </AssistiveText>
        <FontAwesomeIcon icon={icon} size={iconSize} />
    </BaseButton>
);

const StyledComponent: React.FC<IconButtonProps> = styled(Component)`
    border: none;
`;

export const IconButton = StyledComponent;
