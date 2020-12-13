import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Translate from '@material-ui/icons/Translate';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { BaseButton, ButtonProps } from '../button/BaseButton';

type Props = {
    children: React.ReactNode;
    assistiveText: string;
} & Omit<ButtonProps, 'className' | 'title'>;

const Component: React.VFC<Props & StyledProps> = ({ className, assistiveText, disabled, onClick, ...others }) => {
    const theme = useTheme();

    return (
        <BaseButton
            className={className}
            title={assistiveText}
            disabled={disabled}
            onClick={onClick}
            aria-label={assistiveText}
            {...others}
        >
            <Translate style={{ fontSize: theme.fontSize['2xl'] }} />
            <div className={`${className}__selectedItemText`}>日本語</div>
            <KeyboardArrowDown style={{ fontSize: theme.fontSize['lg'] }} />
        </BaseButton>
    );
};
const StyledComponent: React.VFC<Props> = styled(Component)`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    color: ${({ theme }) => theme.color.blue900};
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 0.5rem;

    &:hover {
        background-color: ${({ theme }) => theme.color.gray100};
    }

    &__selectedItemText {
        margin-right: 0.25rem;
        margin-left: 0.5rem;
    }
`;

export const DropdownButton = StyledComponent;
