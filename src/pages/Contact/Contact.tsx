import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { EffectFillButton } from '../../common/components/EffectFillButton';

export const Contact = (): ReactElement => {
    return (
        <Main>
            <h2>お問い合わせ</h2>
            <p>
                お問い合わせは{' '}
                <a href="https://twitter.com/mys_x101" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>{' '}
                の DM にて承っております。
            </p>
            <p>サービスの改善についてのご意見、ご要望をお聞かせください！</p>
            <p>応援コメントもお待ちしております！</p>
            <TopPageButtonWrapper>
                <EffectFillButton text="トップへ戻る"></EffectFillButton>
            </TopPageButtonWrapper>
        </Main>
    );
};

const Main = styled.main`
    ${tw`mx-auto my-16 px-10`};
    max-width: 600px;
    font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', 'YuGothic';
`;

const TopPageButtonWrapper = styled.div`
    ${tw`text-center my-16`};
`;
