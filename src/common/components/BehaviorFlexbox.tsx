import { ExampleItem } from './ExampleItem';
import React, { ReactElement } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import tw from 'tailwind.macro';

export type Props = {
    style: FlattenSimpleInterpolation;
    propertyName: string;
};

export const BehaviorFlexbox = (props: Props): ReactElement => {
    const { style, propertyName } = props;

    const ExampleItems = styled.div`
        ${tw`border border-dashed border-blue-500 m-3`}
        ${style}
    `;

    return (
        <BehaviorBoxWrapper>
            <BehaviorBox>
                <ExampleItems>
                    <ExampleItem numberText="1" />
                    <ExampleItem numberText="2" />
                    <ExampleItem numberText="3" />
                    <ExampleItem numberText="4" />
                </ExampleItems>
            </BehaviorBox>
            <PropertyName>{propertyName}</PropertyName>
        </BehaviorBoxWrapper>
    );
};

const BehaviorBoxWrapper = styled.div`
    ${tw`inline-block`}
`;

const BehaviorBox = styled.div`
    ${tw`inline-block h-56 w-64 border border-solid border-gray-400 mt-3 ml-3`}
`;

const PropertyName = styled.p`
    ${tw`text-lg text-center text-blue-900 mt-3 mb-3`}
`;
