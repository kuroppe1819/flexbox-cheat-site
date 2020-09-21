import React from 'react';
import styled from 'styled-components';
import { FlexboxList } from './FlexboxList';

type Props = {
    id: string;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className } = props;
    return (
        <div className={`${className}`} role="group">
            <div className={`${className}__title`}>
                <h2 className={`${className}__propertyName`}>flex</h2>
                <h3 className={`${className}__propertyDescription`}>要素の表示形式</h3>
            </div>
            <FlexboxList id="display_flex" />
        </div>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    &__title {
        position: sticky;
        top: 0;
        background-color: ${({ theme }) => theme.color.white};
        margin-top: 1rem;
        z-index: 10;
        box-shadow: 0px 3px 3px -3px #cbd5e0;
    }

    &__propertyName {
        color: ${({ theme }) => theme.color.blue900};
        margin: 0;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 400;
    }

    &__propertyDescription {
        color: ${({ theme }) => theme.color.blue900};
        margin: 0;
        padding-top: 0.25rem;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 2;
    }
`;

export const FlexboxGroup: React.FC<Props> = StyledComponent;
