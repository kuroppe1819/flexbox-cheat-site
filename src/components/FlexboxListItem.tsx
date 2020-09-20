import React from 'react';
import styled from 'styled-components';
import { NumberBlock } from './NumberBlock';

type Props = {
    id: string;
    propertyValue: string;
    isHighlight: boolean;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, propertyValue } = props;
    return (
        <li className={`${className}`}>
            <div className={`${className}__numberBlockField`}>
                <div className={`${className}__numberBlockFrame`}>
                    <NumberBlock index={1} />
                    <NumberBlock index={2} />
                    <NumberBlock index={3} />
                    <NumberBlock index={4} />
                </div>
            </div>
            <p className={`${className}__propertyName`}>{propertyValue}</p>
        </li>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: inline-block;
    /* margin: 0.75rem 0.75rem 1.25rem 0.75rem; TODO: 親が指定する */
    text-align: center;

    &__numberBlockField {
        width: 8rem;
        height: 6rem;
        margin: 0 auto;
        padding: 0.5rem;
        border: 1px solid ${({ theme }) => theme.color.gray400};
        cursor: pointer;
    }

    &__numberBlockFrame {
        border: 1px dashed ${({ theme }) => theme.color.blue500};
    }

    &__propertyName {
        display: inline-block;
        margin-top: 0.5rem;
        margin-bottom: 0.75rem;
        text-align: center;
        font-size: 1.125rem;
        /* TODO: ホバーした時に blue500 にする */
        color: ${({ theme }) => theme.color.gray500};
        cursor: pointer;
    }
`;

export const FlexboxListItem = StyledComponent;
