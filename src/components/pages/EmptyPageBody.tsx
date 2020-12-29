import React from 'react';
import styled from 'styled-components';

const Component: React.VFC<StyledProps> = ({ className }) => <div className={className}></div>;

const StyledComponent: React.VFC = styled(Component)`
    height: 100vh;
    background-color: ${({ theme }) => theme.color.white};
`;

export const EmptyPageBody = StyledComponent;
