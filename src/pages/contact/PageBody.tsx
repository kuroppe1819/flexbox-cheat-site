import React from 'react';
import styled from 'styled-components';
import { TextLink } from '../../components/common/link/TextLink';
import { BackToMainPageLink } from '../../components/pages/BackToMainPageLink';
import { useCustomIntl } from '../../fixtures/hooks/useCustomIntl';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const { formatMessage } = useCustomIntl();

    return (
        <main className={className}>
            <h2>{formatMessage({ id: 'contact.title' })}</h2>
            <p>
                お問い合わせは{' '}
                <TextLink
                    appendClassName={`${className}__twitterLink`}
                    url="https://twitter.com/mys_x101"
                    text="Twitter"
                    external
                />{' '}
                の DM にて承っております。
            </p>
            <p>サービスの改善についてのご意見、ご要望をお聞かせください！</p>
            <p>応援コメントもお待ちしております！</p>
            <div className={`${className}__backToMainPageLink`}>
                <BackToMainPageLink />
            </div>
        </main>
    );
};

const StyledComponent: React.VFC = styled(Component)`
    max-width: 37.5rem;
    margin: 4rem auto;
    padding: 0 2.5rem;
    color: ${({ theme }) => theme.color.gray700};

    &__twitterLink {
        color: ${({ theme }) => theme.color.blue500};
    }

    &__backToMainPageLink {
        margin: 4rem 0;
    }
`;

export const PageBody = StyledComponent;
