import React from 'react';
import styled from 'styled-components';
import { FlexboxListItem } from './FlexboxListItem';

type Props = {
    id: string;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className } = props;
    return (
        <ul className={`${className}`}>
            <FlexboxListItem id="display_flex" propertyValue="flex" isHighlight={false} />
            <FlexboxListItem id="display_inline-flex" propertyValue="inline-flex" isHighlight={true} />
        </ul>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FlexboxList: React.FC<Props> = StyledComponent;
