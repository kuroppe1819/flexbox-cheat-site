import clsx from 'clsx';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FlexboxPropertyInfo } from '../../../../data/flexboxProperties';
import { convertObjectToCssNotation } from '../../../../fixtures/functions/constructSourceCode';
import { OpenedCodeViewerContext } from '../../../providers/OpenedCodeViewer';
import { SelectedFlexboxPropertyIdContext } from '../../../providers/SelectedFlexboxPropertyIdProvider';
import { NumberBlock } from './NumberBlock';

type Props = {
    selectedFlexboxPropertyId: string | null;
    mouseOverItemId: string | null;
    onClickItem: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
} & OuterProps;

export class ChildElementType {
    private numberOfElement: number;
    private startIndex: number;

    constructor(numberOfElement: number, startIndex = 0) {
        this.numberOfElement = numberOfElement;
        this.startIndex = startIndex;
    }

    isFirstChild(currentIndex: number) {
        return this.startIndex === currentIndex;
    }

    isChildFeatured(currentIndex: number) {
        return this.numberOfElement + this.startIndex - 2 === currentIndex;
    }

    isLastChild(currentIndex: number) {
        return this.numberOfElement + this.startIndex - 1 === currentIndex;
    }
}

const NumberBlocks = (className: string, propertyInfo: FlexboxPropertyInfo) => {
    const numberOfNumberBlock = propertyInfo.numberOfNumberBlock;
    const childElementType = new ChildElementType(numberOfNumberBlock);
    return Array(propertyInfo.numberOfNumberBlock)
        .fill(0)
        .map((value, index) => {
            const { firstChild, childFeatured, lastChild } = propertyInfo.style;
            if (childElementType.isChildFeatured(index) && childFeatured !== null) {
                return (
                    <NumberBlock
                        key={index}
                        appendClassName={`${className}__numberBlock ${className}__numberBlock-featured`}
                        number={index + 1}
                    />
                );
            } else if (childElementType.isFirstChild(index) && firstChild !== null) {
                return (
                    <NumberBlock
                        key={index}
                        appendClassName={`${className}__numberBlock ${className}__numberBlock-first`}
                        number={index + 1}
                    />
                );
            } else if (childElementType.isLastChild(index) && lastChild !== null) {
                return (
                    <NumberBlock
                        key={index}
                        appendClassName={`${className}__numberBlock ${className}__numberBlock-last`}
                        number={index + 1}
                    />
                );
            } else {
                return <NumberBlock key={index} appendClassName={`${className}__numberBlock`} number={index + 1} />;
            }
        });
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, appendClassName, propertyInfo, onClickItem, onMouseEnter, onMouseLeave } = props;

    return (
        <li className={clsx(className, appendClassName && `${appendClassName}__flexboxListItem`)}>
            <div
                className={`${className}__numberBlockField`}
                onClick={onClickItem}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={`${className}__numberBlockFrame`}>{NumberBlocks(className, propertyInfo)}</div>
            </div>
            <p className={`${className}__propertyValue`}>{propertyInfo.value}</p>
        </li>
    );
};

export const StyledComponent: React.FC<Props> = styled(Component)`
    display: inline-block;
    text-align: center;

    &__numberBlockField {
        width: 8rem;
        height: 6rem;
        margin: 0 auto;
        padding: ${({ id, selectedFlexboxPropertyId, mouseOverItemId }) =>
            selectedFlexboxPropertyId === id || mouseOverItemId === id ? 'calc(0.5rem - 1px)' : '0.5rem'};
        border-width: ${({ id, selectedFlexboxPropertyId, mouseOverItemId }) =>
            selectedFlexboxPropertyId === id || mouseOverItemId === id ? '2px' : '1px'};
        border-style: solid;
        border-color: ${({ id, selectedFlexboxPropertyId, mouseOverItemId }) =>
            selectedFlexboxPropertyId === id || mouseOverItemId === id
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
        color: ${({ id, selectedFlexboxPropertyId, mouseOverItemId }) =>
            selectedFlexboxPropertyId === id || mouseOverItemId === id
                ? ({ theme }) => theme.color.blue500
                : ({ theme }) => theme.color.gray400};
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.lg};
        font-weight: ${({ id, selectedFlexboxPropertyId, mouseOverItemId }) =>
            selectedFlexboxPropertyId === id || mouseOverItemId === id ? 400 : 300};
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
} & AppendClassName;

const Container: React.FC<OuterProps> = (props: OuterProps) => {
    const { id } = props;
    const [, setOpenedCodeViewer] = useContext(OpenedCodeViewerContext);
    const [selectedFlexboxPropertyId, setFlexboxPropertyId] = useContext(SelectedFlexboxPropertyIdContext);
    const [mouseOverItemId, setMouseOverItemId] = useState<string | null>(null);

    const handleClickItem = () => {
        setFlexboxPropertyId(id);
        setOpenedCodeViewer(true);
    };
    const handleMouseEnter = () => setMouseOverItemId(id);
    const handleMouseLeave = () => setMouseOverItemId(null);

    return (
        <StyledComponent
            selectedFlexboxPropertyId={selectedFlexboxPropertyId}
            mouseOverItemId={mouseOverItemId}
            onClickItem={handleClickItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        />
    );
};

export const FlexboxListItem = Container;
