import React from 'react';
import styled from 'styled-components';

type Props = {
    index: number;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, index } = props;
    return (
        <div className={className}>
            <span className={`${className}__number`}>{index}</span>
        </div>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
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
