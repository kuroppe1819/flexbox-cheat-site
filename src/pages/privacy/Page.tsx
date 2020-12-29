import React from 'react';
import { CustomIntlProvider, Language } from '../../components/providers/CustomIntlProvider';
import { PageRoot } from '../../components/root/PageRoot';
import { PageBody } from './PageBody';

type Props = {
    language: Language;
};

const Component: React.VFC<Props> = ({ language }) => (
    <CustomIntlProvider language={language}>
        <PageRoot>
            <PageBody />
        </PageRoot>
    </CustomIntlProvider>
);

export const Page = Component;
