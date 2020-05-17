import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import tw from 'tailwind.macro';
import { ExampleItem } from './ExampleItem';
import { ThemeColor } from '../util/DefineProperty';

export type Props = {
    parentStyle: FlattenSimpleInterpolation;
    childStyle?: FlattenSimpleInterpolation;
    firstChildStyle?: FlattenSimpleInterpolation;
    childFeaturedStyle?: FlattenSimpleInterpolation;
    lastChildStyle?: FlattenSimpleInterpolation;
    propertyValue: string;
    isMouseEnter: boolean;
    setMouseEnter: Dispatch<SetStateAction<boolean>>;
    onClickBoxHandler: () => void;
};

export const BehaviorFlexbox = (props: Props): ReactElement => {
    const {
        parentStyle,
        childStyle,
        firstChildStyle,
        childFeaturedStyle,
        lastChildStyle,
        propertyValue,
        isMouseEnter,
        setMouseEnter,
        onClickBoxHandler,
    } = props;

    return (
        <BehaviorBoxWrapper>
            <BehaviorBox
                isMouseEnter={isMouseEnter}
                onClick={onClickBoxHandler}
                onMouseEnter={(): void => setMouseEnter(true)}
                onMouseLeave={(): void => setMouseEnter(false)}
            >
                <ExampleItems parentStyle={parentStyle}>
                    <ExampleItem overrideItemStyle={[childStyle, firstChildStyle]} numberText="1" />
                    <ExampleItem overrideItemStyle={childStyle} numberText="2" />
                    <ExampleItem overrideItemStyle={[childStyle, childFeaturedStyle]} numberText="3" />
                    <ExampleItem overrideItemStyle={[childStyle, lastChildStyle]} numberText="4" />
                </ExampleItems>
            </BehaviorBox>
            <PropertyValue
                isMouseEnter={isMouseEnter}
                onMouseEnter={(): void => setMouseEnter(true)}
                onMouseLeave={(): void => setMouseEnter(false)}
            >
                {propertyValue}
            </PropertyValue>
        </BehaviorBoxWrapper>
    );
};

const BehaviorBoxWrapper = styled.div`
    ${tw`mx-3 mt-3 mb-5 text-center`}
`;

const BehaviorBox = styled.div<{ isMouseEnter: boolean }>`
    ${tw`h-24 w-32 border border-solid border-gray-400 cursor-pointer p-2 text-center`}
    border-color: ${(props): string => (props.isMouseEnter ? ThemeColor.borderBlue : ThemeColor.borderGray)}
`;

const ExampleItems = styled.div<{ parentStyle: FlattenSimpleInterpolation }>`
    ${tw`border border-dashed border-blue-500`}
    ${(props): FlattenSimpleInterpolation => props.parentStyle}
`;

const PropertyValue = styled.p<{ isMouseEnter: boolean }>`
    ${tw`inline-block text-lg text-center text-gray-500 mt-2 mb-3 cursor-pointer`}
    color: ${(props): string => (props.isMouseEnter ? ThemeColor.borderBlue : ThemeColor.borderGray)}
`;
