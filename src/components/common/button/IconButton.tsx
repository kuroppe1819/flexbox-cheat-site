import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { AssistiveText } from '../assistiveText/AssistiveText';
import { BaseButton, ButtonProps } from './BaseButton';

export type IconButtonProps = {
    assistiveText: string;
    icon: IconProp;
    iconSize: SizeProp;
    styled?: FlattenSimpleInterpolation;
} & Omit<ButtonProps, 'className' | 'title'>;

const Component: React.FC<IconButtonProps & StyledProps> = ({
    className,
    assistiveText,
    icon,
    iconSize,
    type = 'button',
    disabled,
    onClick,
    ...others
}) => (
    <BaseButton
        className={className}
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
    ${({ styled }) => styled};
`;

export const IconButton = StyledComponent;
