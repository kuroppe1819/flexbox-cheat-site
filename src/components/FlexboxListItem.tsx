import React, { useContext } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { FlexboxPropertyInfo } from '../data/flexboxProperties';
import { convertObjectToCssNotation } from '../fixtures/functions/constractSourceCode';
import { NumberBlock } from './NumberBlock';
import { IndexContext } from '../pages/Index';

const isFirstChild = (index: number): boolean => index === 0;
const isChildFeatured = (propertyInfo: FlexboxPropertyInfo, index: number) =>
    propertyInfo.numberOfNumberBlock - 2 === index;
const isLastChild = (propertyInfo: FlexboxPropertyInfo, index: number) =>
    propertyInfo.numberOfNumberBlock - 1 === index;

type Props = {
    selectedFlexboxPropertyId: string | null;
    mouseOverFlexboxListItemId: string | null;
    onClickItem: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
} & OuterProps;

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, assignClassName, propertyInfo, onClickItem, onMouseEnter, onMouseLeave } = props;

    return (
        <li className={clsx(className, assignClassName && `${assignClassName}__flexboxListItem`)}>
            <div
                className={`${className}__numberBlockField`}
                onClick={onClickItem}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={`${className}__numberBlockFrame`}>
                    {Array(propertyInfo.numberOfNumberBlock)
                        .fill(0)
                        .map((value, index) => {
                            if (isFirstChild(index) && propertyInfo.style.firstChild !== null) {
                                return (
                                    <NumberBlock
                                        key={index}
                                        assignClassName={`${className}__numberBlock ${className}__numberBlock-first`}
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
                                        assignClassName={`${className}__numberBlock ${className}__numberBlock-featured`}
                                        number={index + 1}
                                    />
                                );
                            } else if (isLastChild(propertyInfo, index) && propertyInfo.style.lastChild !== null) {
                                return (
                                    <NumberBlock
                                        key={index}
                                        assignClassName={`${className}__numberBlock ${className}__numberBlock-last`}
                                        number={index + 1}
                                    />
                                );
                            } else {
                                return (
                                    <NumberBlock
                                        key={index}
                                        assignClassName={`${className}__numberBlock`}
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

const StyledComponent: React.FC<Props> = styled(Component)`
    display: inline-block;
    text-align: center;

    &__numberBlockField {
        width: 8rem;
        height: 6rem;
        margin: 0 auto;
        padding: 0.5rem;
        /* border: 1px solid ${({ theme }) => theme.color.gray400}; */
        border-width: 1px;
        border-style: solid;
        border-color: ${({ id, selectedFlexboxPropertyId, mouseOverFlexboxListItemId }) =>
            selectedFlexboxPropertyId === id || mouseOverFlexboxListItemId === id
                ? ({ theme }) => theme.color.blue500
                : ({ theme }) => theme.color.gray400};
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
        color: ${({ id, selectedFlexboxPropertyId, mouseOverFlexboxListItemId }) =>
            selectedFlexboxPropertyId === id || mouseOverFlexboxListItemId === id
                ? ({ theme }) => theme.color.blue500
                : ({ theme }) => theme.color.gray400};
        text-align: center;
        font-size: 1.125rem;
        cursor: pointer;
    }

    &__numberBlock {
        margin: 1px;
        ${({ propertyInfo }) => propertyInfo.style.child && convertObjectToCssNotation(propertyInfo.style.child)}
    }

    &__numberBlock-first {
        ${({ propertyInfo }) =>
            propertyInfo.style.firstChild && convertObjectToCssNotation(propertyInfo.style.firstChild)}
    }

    &__numberBlock-featured {
        ${({ propertyInfo }) =>
            propertyInfo.style.childFeatured && convertObjectToCssNotation(propertyInfo.style.childFeatured)}
    }

    &__numberBlock-last {
        ${({ propertyInfo }) =>
            propertyInfo.style.lastChild && convertObjectToCssNotation(propertyInfo.style.lastChild)}
    }
`;

type OuterProps = {
    id: string;
    propertyInfo: FlexboxPropertyInfo;
} & AssignClassNameProps;

const Container: React.FC<OuterProps> = (props: OuterProps) => {
    const { id } = props;
    const {
        selectedFlexboxPropertyId,
        mouseOverFlexboxListItemId,
        setFlexboxPropertyId,
        setMouseOverFlexboxListItemId,
    } = useContext(IndexContext);

    const handleClickItem = () => setFlexboxPropertyId(id);
    const handleMouseEnter = () => setMouseOverFlexboxListItemId(id);
    const handleMouseLeave = () => setMouseOverFlexboxListItemId(null);

    return (
        <StyledComponent
            selectedFlexboxPropertyId={selectedFlexboxPropertyId}
            mouseOverFlexboxListItemId={mouseOverFlexboxListItemId}
            onClickItem={handleClickItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        />
    );
};

export const FlexboxListItem = Container;
