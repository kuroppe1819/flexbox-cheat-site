import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import tw from 'tailwind.macro';
import { Color } from '../util/DefineProperty';
import { ExampleItem } from './ExampleItem';

export type Props = {
    parentStyle: FlattenSimpleInterpolation;
    childStyle?: FlattenSimpleInterpolation;
    firstChildStyle?: FlattenSimpleInterpolation;
    childFeaturedStyle?: FlattenSimpleInterpolation;
    lastChildStyle?: FlattenSimpleInterpolation;
    uniqueCode: string;
    uniqueReference: string;
    propertyValue: string;
    isKeepedHighlight: boolean;
    isMouseEnter: boolean;
    setSelectedCssCode: Dispatch<SetStateAction<string>>;
    setShowReference: Dispatch<SetStateAction<string>>;
    setOpenedCodeViewer: Dispatch<SetStateAction<boolean>>;
    setKeepedHighlight: Dispatch<SetStateAction<boolean>>;
    setMouseEnter: Dispatch<SetStateAction<boolean>>;
};

export const BehaviorFlexbox = (props: Props): ReactElement => {
    const {
        parentStyle,
        childStyle,
        firstChildStyle,
        childFeaturedStyle,
        lastChildStyle,
        propertyValue,
        uniqueCode,
        uniqueReference,
        isKeepedHighlight,
        isMouseEnter,
        setSelectedCssCode,
        setShowReference,
        setOpenedCodeViewer,
        setKeepedHighlight,
        setMouseEnter,
    } = props;

    const onClickBehaviorBoxHandler = (): void => {
        setSelectedCssCode(uniqueCode);
        setKeepedHighlight(true);
        setOpenedCodeViewer(true);
        setShowReference(uniqueReference);
    };

    return (
        <BehaviorBoxWrapper>
            <BehaviorBox
                isKeepedHighlight={isKeepedHighlight}
                isMouseEnter={isMouseEnter}
                onClick={onClickBehaviorBoxHandler}
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
                isKeepedHighlight={isKeepedHighlight}
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

const BehaviorBox = styled.div<{ isKeepedHighlight: boolean; isMouseEnter: boolean }>`
    ${tw`h-24 w-32 border border-solid border-gray-400 cursor-pointer p-2 text-center mx-auto`};
    border-color: ${(props): string => (props.isKeepedHighlight || props.isMouseEnter ? Color.blue500 : Color.gray400)};
    text-align: initial;
`;

const ExampleItems = styled.div<{ parentStyle: FlattenSimpleInterpolation }>`
    ${tw`border border-dashed border-blue-500`};
    ${(props): FlattenSimpleInterpolation => props.parentStyle};
`;

const PropertyValue = styled.p<{ isKeepedHighlight: boolean; isMouseEnter: boolean }>`
    ${tw`inline-block text-lg text-center mt-2 mb-3 cursor-pointer`};
    color: ${(props): string => (props.isKeepedHighlight || props.isMouseEnter ? Color.blue500 : Color.gray500)};
`;
