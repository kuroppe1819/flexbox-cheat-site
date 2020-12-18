import React from 'react';
import styled from 'styled-components';
import { BackToTopLink } from '../components/pages/BackToTopLink';
import { CustomIntlProvider, Language } from '../components/providers/CustomIntlProvider';
import { PageRoot } from '../components/root/PageRoot';

const Component: React.VFC<StyledProps> = ({ className }) => (
    <PageRoot>
        <main className={`${className}`}>
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
            <div className={`${className}__backToTopLink`}>
                <BackToTopLink />
            </div>
        </main>
    </PageRoot>
);

const StyledComponent: React.VFC = styled(Component)`
    max-width: 37.5rem;
    margin: 4rem auto;
    padding: 0 2.5rem;

    &__backToTopLink {
        margin: 4rem 0;
    }
`;

type OuterProps = {
    language: Language;
};

const Container: React.VFC<OuterProps> = ({ language }) => (
    <CustomIntlProvider language={language}>
        <StyledComponent />
    </CustomIntlProvider>
);

export const Contact = Container;
