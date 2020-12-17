import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
};

const Component: React.FC<Props & StyledProps> = ({ className, children }) => (
    <ul role="menu" className={className}>
        {children}
    </ul>
);

const StyledComponent: React.FC = styled(Component)`
    padding: 0.5rem 0;
`;

export const Menu = StyledComponent;
