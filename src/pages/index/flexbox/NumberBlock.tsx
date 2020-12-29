import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';

type Props = {
    number: number;
} & AppendClassName;

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, appendClassName, number } = props;
    return (
        <div className={clsx(className, appendClassName)}>
            <span className={`${className}__number`}>{number}</span>
        </div>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    min-width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.blue400};

    &__number {
        color: ${({ theme }) => theme.color.blue100};
        font-size: 1rem;
    }
`;

export const NumberBlock = StyledComponent;
