import React from 'react';
import styled from 'styled-components';

type Props = {
    number: number;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, number } = props;
    return (
        <div className={className}>
            <span className={`${className}__number`}>{number}</span>
        </div>
    );
};

const StyledComponent: React.FC<Props & AssignClassNameProps> = styled(Component)`
    width: 1rem;
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
