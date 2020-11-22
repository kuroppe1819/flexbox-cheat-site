import React from 'react';
import styled from 'styled-components';
import { FlexboxPropertyInfo } from '../../../data/flexboxProperties';
import { createFlexboxPropertyId } from '../../../fixtures/functions/managementId';
import { FlexboxListItem } from './FlexboxListItem';

type Props = {
    propertyName: string;
    propertyInfoList: FlexboxPropertyInfo[];
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, propertyName, propertyInfoList } = props;
    return (
        <ul className={`${className}`}>
            {propertyInfoList.map((info) => {
                const id = createFlexboxPropertyId(propertyName, info.value);
                return <FlexboxListItem key={id} assignClassName={className} id={id} propertyInfo={info} />;
            })}
        </ul>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__flexboxListItem {
        margin: 0rem 0.75rem 1rem 0.75rem;

        &:first-of-type {
            margin-top: 0.75rem;
        }
    }
`;

export const FlexboxList: React.FC<Props> = StyledComponent;
