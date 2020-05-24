import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';
import { EffectFillButton } from '../../common/components/EffectFillButton';

export const Terms = (): ReactElement => {
    return (
        <Main>
            <h1>利用規約</h1>
            <p>
                この利用規約（以下，「本規約」といいます。）は，Flexbox Cheat
                Site（以下，「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
            </p>
            <h2>第1条（適用）</h2>
            <p>本規約は，ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。</p>
        </Main>
    );
};

const Main = styled.main`
    ${tw``}
`;
