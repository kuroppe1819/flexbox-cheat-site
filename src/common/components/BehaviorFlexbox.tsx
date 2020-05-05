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
            <PropertyValue>{propertyName}</PropertyValue>
        </BehaviorBoxWrapper>
    );
};

const BehaviorBoxWrapper = styled.div`
    ${tw`inline-block m-3`}
`;

const BehaviorBox = styled.div`
    ${tw`inline-block h-40 w-48 border border-solid border-gray-400`}
`;

const PropertyValue = styled.p`
    ${tw`text-lg text-center text-blue-900 mt-3 mb-3`}
`;
