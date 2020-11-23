import React from 'react';
import styled from 'styled-components';
import { TextLink, TEXT_LINK_VARIANT } from '../components/common/link/TextLink';
import { PageRoot } from '../components/root/PageRoot';

const Component: React.FC<StyledProps> = (props: StyledProps) => {
    const { className } = props;
    return (
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
                <div className={`${className}__fillEffectButton`}>
                    <TextLink text={'トップへ戻る'} url={process.env.ROOT_PATH} variant={TEXT_LINK_VARIANT.SQUARE} />
                </div>
            </main>
        </PageRoot>
    );
};

const StyledComponent: React.FC = styled(Component)`
    max-width: 37.5rem;
    margin: 4rem auto;
    padding: 0 2.5rem;

    &__fillEffectButton {
        margin: 4rem 0;
        text-align: center;
    }
`;

export const Contact = StyledComponent;
