import { ExampleItem } from './ExampleItem';
import React, { ReactElement } from 'react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import tw from 'tailwind.macro';

export type Props = {
    parentStyle: FlattenSimpleInterpolation;
    propertyName: string;
    onClickBoxHandler: () => void;
};

export const BehaviorFlexbox = (props: Props): ReactElement => {
    const { parentStyle, propertyName, onClickBoxHandler } = props;

    const ExampleItems = styled.div`
        ${tw`border border-dashed border-blue-500 m-3`}
        ${parentStyle}
    `;

    return (
        <BehaviorBoxWrapper>
            <BehaviorBox onClick={onClickBoxHandler}>
                <ExampleItems>
                    <ExampleItem numberText="1" />
                    <ExampleItem numberText="2" />
                    <ExampleItem numberText="3" />
                    <ExampleItem numberText="4" />
                </ExampleItems>
            </BehaviorBox>
            <PropertyValue>{propertyName}</PropertyValue>
        </BehaviorBoxWrapper>
    );
};

const BehaviorBoxWrapper = styled.div`
    ${tw`inline-block m-3`}
`;

const BehaviorBox = styled.div`
    ${tw`inline-block h-40 w-48 border border-solid border-gray-400 hover:border-blue-500 cursor-pointer`}
`;

const PropertyValue = styled.p`
    ${tw`text-lg text-center text-blue-900 mt-3 mb-3`}
`;
