import React, { Suspense } from 'react';
import { EmptyPageBody } from '../../components/pages/EmptyPageBody';
import { CustomIntlProvider, Language } from '../../components/providers/CustomIntlProvider';
import { PageRoot } from '../../components/root/PageRoot';

const PageBody = React.lazy(() => import('./PageBody').then(({ PageBody }) => ({ default: PageBody })));

type Props = {
    language: Language;
};

const Component: React.VFC<Props> = ({ language }) => (
    <CustomIntlProvider language={language}>
        <PageRoot>
            <Suspense fallback={<EmptyPageBody />}>
                <PageBody />
            </Suspense>
        </PageRoot>
    </CustomIntlProvider>
);

export const Page = Component;
