import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string;
    href: string;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, text, href } = props;
    return (
        <a className={`${className}`} href={href}>
            {text}
        </a>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: inline-block;
    padding: 0.75rem 1.75rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.blue400};
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.blue400};
    text-decoration: none;
    user-select: none;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.color.white};
        box-shadow: inset ${({ theme }) => theme.color.blue400} 0 0 0 2em;
    }
`;

export const FillEffectLink = StyledComponent;
