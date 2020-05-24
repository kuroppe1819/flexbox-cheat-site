import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Color } from '../util/DefineProperty';
import { Link } from 'react-router-dom';

type Props = {
    text: string;
};

export const EffectFillButton = (props: Props): ReactElement => {
    return <Button to="/">{props.text}</Button>;
};

const Button = styled(Link)`
    ${tw`relative inline-block text-lg text-blue-400 hover:text-white no-underline select-none border border-solid border-blue-400 px-8 py-3 cursor-pointer`};
    transition: 0.3s;

    :hover {
        box-shadow: inset ${Color.blue400} 0 0 0 2em;
    }
`;
