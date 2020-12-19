import React from 'react';
import styled from 'styled-components';
import { BackToMainPageLink } from '../components/pages/BackToMainPageLink';
import { CustomIntlProvider, Language } from '../components/providers/CustomIntlProvider';
import { PageRoot } from '../components/root/PageRoot';

const Component: React.VFC<StyledProps> = ({ className }) => (
    <PageRoot>
        <main className={`${className}`}>
            <h2>プライバシーポリシー</h2>
            <p>
                Flexbox Cheat
                Site（以下，「本サービス」といいます。）は、本サービスが取得した個人情報の取扱いに関し、個人情報の保護に関する法律、個人情報保護に関するガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します
            </p>
            <h3>個人情報の利用目的</h3>
            <p>
                本サービスは、本が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。
            </p>
            <h3>個人情報の安全管理</h3>
            <p>
                本サービスは、個人情報の保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、本サービスの取り扱う個人情報の漏えい、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講ずるものとします。
            </p>
            <h3>個人情報の利用目的の変更</h3>
            <p>前項で特定した利用目的は変更される場合がございます。</p>
            <h3>個人情報の第三者提供</h3>
            <p>
                本サービスは、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行うこととします。
            </p>
            <h3>個人情報の取扱いの改善・見直し</h3>
            <p>
                本サービスは、個人情報の取扱い、管理体制及び取組みに関する点検を実施し、継続的に改善・見直しを行います。
            </p>
            <h3>個人情報の廃棄</h3>
            <p>
                本サービスは、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。
            </p>
        </main>
        <div className={`${className}__backToMainPageLink`}>
            <BackToMainPageLink />
        </div>
    </PageRoot>
);

const StyledComponent: React.VFC = styled(Component)`
    max-width: 37.5rem;
    margin: 4rem auto;
    padding: 0 2.5rem;

    &__backToMainPageLink {
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

export const Privacy = Container;
