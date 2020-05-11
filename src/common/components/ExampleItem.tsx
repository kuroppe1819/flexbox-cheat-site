import React, { ReactElement } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import tw from 'tailwind.macro';

export type Props = {
    numberText: string;
    overrideItemStyle?: FlattenSimpleInterpolation;
};

export const ExampleItem = (props: Props): ReactElement => {
    return (
        <Item overrideStyle={props.overrideItemStyle ? props.overrideItemStyle : css``}>
            <ItemText>{props.numberText}</ItemText>
        </Item>
    );
};

const Item = styled.div<{ overrideStyle: FlattenSimpleInterpolation }>`
    ${tw`m-px bg-blue-400 flex justify-center items-center`}
    min-width: 1rem;
    ${(props): FlattenSimpleInterpolation => props.overrideStyle}
`;

const ItemText = styled.div`
    ${tw`inline-block text-blue-100 text-base`}
`;
