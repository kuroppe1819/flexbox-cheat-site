import React from 'react';
import styled from 'styled-components';
import { FlexboxPropertyInfo } from '../data/flexboxProperty';
import { convertObjectToCssNotation } from '../fixtures/functions/constractSourceCode';
import { NumberBlock } from './NumberBlock';

const isFirstChild = (index: number): boolean => index === 0;
const isChildFeatured = (propertyInfo: FlexboxPropertyInfo, index: number) =>
    propertyInfo.numberOfNumberBlock - 2 === index;
const isLastChild = (propertyInfo: FlexboxPropertyInfo, index: number) =>
    propertyInfo.numberOfNumberBlock - 1 === index;

type Props = {
    id: string;
    propertyInfo: FlexboxPropertyInfo;
    isHighlight: boolean;
};

const Component: React.FC<Props & StyledProps & AssignClassNameProps> = (
    props: Props & StyledProps & AssignClassNameProps
) => {
    const { className, assignClassName, propertyInfo } = props;
    return (
        <li className={`${className} ${assignClassName}`}>
            <div className={`${className}__numberBlockField`}>
                <div className={`${className}__numberBlockFrame`}>
                    {Array(propertyInfo.numberOfNumberBlock)
                        .fill(0)
                        .map((value, index) => {
                            if (isFirstChild(index) && propertyInfo.style.firstChild !== null) {
                                return (
                                    <NumberBlock
                                        key={index}
                                        assignClassName={`${className}__NumberBlock ${className}__NumberBlock-first`}
                                        number={index + 1}
                                    />
                                );
                            } else if (
                                isChildFeatured(propertyInfo, index) &&
                                propertyInfo.style.childFeatured !== null
                            ) {
                                console.log(isChildFeatured(propertyInfo, index));
                                return (
                                    <NumberBlock
                                        key={index}
                                        assignClassName={`${className}__NumberBlock ${className}__NumberBlock-featured`}
                                        number={index + 1}
                                    />
                                );
                            } else if (isLastChild(propertyInfo, index) && propertyInfo.style.lastChild !== null) {
                                return (
                                    <NumberBlock
                                        key={index}
                                        assignClassName={`${className}__NumberBlock ${className}__NumberBlock-last`}
                                        number={index + 1}
                                    />
                                );
                            } else {
                                return (
                                    <NumberBlock
                                        key={index}
                                        assignClassName={`${className}__NumberBlock`}
                                        number={index + 1}
                                    />
                                );
                            }
                        })}
                </div>
            </div>
            <p className={`${className}__propertyValue`}>{propertyInfo.value}</p>
        </li>
    );
};

const StyledComponent: React.FC<Props & AssignClassNameProps> = styled(Component)`
    display: inline-block;
    text-align: center;

    &__numberBlockField {
        width: 8rem;
        height: 6rem;
        margin: 0 auto;
        padding: 0.5rem;
        border: 1px solid ${({ theme }) => theme.color.gray400};
        text-align: start;
        cursor: pointer;
    }

    &__numberBlockFrame {
        border: 1px dashed ${({ theme }) => theme.color.blue500};
        ${({ propertyInfo }) => propertyInfo.style.parent && convertObjectToCssNotation(propertyInfo.style.parent)}
    }

    &__propertyValue {
        display: inline-block;
        margin-top: 0.5rem;
        margin-bottom: 0.75rem;
        text-align: center;
        font-size: 1.125rem;
        /* TODO: ホバーした時に blue500 にする */
        color: ${({ theme }) => theme.color.gray500};
        cursor: pointer;
    }

    &__NumberBlock {
        margin: 1px;
        ${({ propertyInfo }) => propertyInfo.style.child && convertObjectToCssNotation(propertyInfo.style.child)}
    }

    &__NumberBlock-first {
        ${({ propertyInfo }) =>
            propertyInfo.style.firstChild && convertObjectToCssNotation(propertyInfo.style.firstChild)}
    }

    &__NumberBlock-featured {
        ${({ propertyInfo }) =>
            propertyInfo.style.childFeatured && convertObjectToCssNotation(propertyInfo.style.childFeatured)}
    }

    &__NumberBlock-last {
        ${({ propertyInfo }) =>
            propertyInfo.style.lastChild && convertObjectToCssNotation(propertyInfo.style.lastChild)}
    }
`;

export const FlexboxListItem = StyledComponent;
