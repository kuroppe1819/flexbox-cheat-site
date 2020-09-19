import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    return <div className={props.className}>Hello World</div>;
};

const StyledComponent: React.FC = styled(Component)`
    color: red;
    background-color: blue;
`;

export const NumberBlock = StyledComponent;
