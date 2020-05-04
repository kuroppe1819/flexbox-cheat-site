import { ExampleItem } from '../components/ExampleItem';
import React, { ReactElement } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import tw from 'tailwind.macro';

export type Props = {
    style: FlattenSimpleInterpolation;
};

export const BehaviorFlexbox = (props: Props): ReactElement => {
    const BehaviorBox = styled.div`
        ${tw`border border-dashed border-blue-500 m-3`}
        ${props.style}
    `;

    return (
        <BehaviorBoxWrapper>
            <BehaviorBox>
                <ExampleItem numberText="1" />
                <ExampleItem numberText="2" />
                <ExampleItem numberText="3" />
                <ExampleItem numberText="4" />
            </BehaviorBox>
        </BehaviorBoxWrapper>
    );
};

const BehaviorBoxWrapper = styled.div`
    ${tw`inline-block h-56 w-64 border border-solid border-gray-400 mt-3 ml-3`}
`;
