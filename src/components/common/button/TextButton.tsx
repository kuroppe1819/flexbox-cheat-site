import clsx from 'clsx';
import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { FontSize } from '../../../themes/fontSize';
import { BaseButton, ButtonProps } from './BaseButton';

export type TextButtonColor = TypeOfValues<typeof TEXT_BUTTON_COLOR>;

export const TEXT_BUTTON_COLOR = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

export type TextButtonProps = {
    text: string;
    color?: TextButtonColor;
    fontSize?: FontSize;
    styled?: FlattenSimpleInterpolation;
} & Omit<ButtonProps, 'className'>;

const Component: React.FC<TextButtonProps & StyledProps> = ({
    className,
    text,
    color = TEXT_BUTTON_COLOR.PRIMARY,
    type = 'button',
    title,
    disabled,
    onClick,
    ...others
}) => (
    <BaseButton
        className={clsx(
            className,
            TEXT_BUTTON_COLOR.PRIMARY === color && `${className}__${TEXT_BUTTON_COLOR.PRIMARY}`,
            TEXT_BUTTON_COLOR.SECONDARY === color && `${className}__${TEXT_BUTTON_COLOR.SECONDARY}`
        )}
        type={type}
        title={title}
        disabled={disabled}
        onClick={onClick}
        {...others}
    >
        {text}
    </BaseButton>
);

const StyledComponent: React.FC<TextButtonProps> = styled(Component)`
    font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.base)};

    &__primary {
        color: ${({ theme }) => theme.color.blue100};
        background-color: ${({ theme }) => theme.color.blue400};
        border: 1px solid ${({ theme }) => theme.color.blue400};
    }

    &__secondary {
        color: ${({ theme }) => theme.color.blue900};
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.gray400};
    }

    ${({ styled }) => styled};
`;

export const TextButton = StyledComponent;
