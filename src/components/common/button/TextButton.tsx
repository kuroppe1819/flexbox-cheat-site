import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../themes/fontSize';
import { BaseButton, ButtonProps } from './BaseButton';

export type TextButtonTheme = TypeOfValues<typeof TEXT_BUTTON_THEME>;

export const TEXT_BUTTON_THEME = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

export type TextButtonProps = {
    text: string;
    color?: TextButtonTheme;
    fontSize?: FontSize;
} & Omit<ButtonProps, 'className'> &
    AppendClassName;

const Component: React.FC<TextButtonProps & StyledProps> = ({
    className,
    appendClassName,
    text,
    color = TEXT_BUTTON_THEME.PRIMARY,
    type = 'button',
    title,
    disabled,
    onClick,
    ...others
}) => (
    <BaseButton
        className={clsx(
            className,
            appendClassName,
            TEXT_BUTTON_THEME.PRIMARY === color && `${className}__${TEXT_BUTTON_THEME.PRIMARY}`,
            TEXT_BUTTON_THEME.SECONDARY === color && `${className}__${TEXT_BUTTON_THEME.SECONDARY}`
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
    padding: 0;

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
`;

export const TextButton = StyledComponent;
