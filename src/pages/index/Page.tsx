import React from 'react';
import { CustomIntlProvider, Language } from '../../components/providers/CustomIntlProvider';
import { OpenedCodeViewerProvider } from '../../components/providers/OpenedCodeViewer';
import { SelectedFlexboxPropertyIdProvider } from '../../components/providers/SelectedFlexboxPropertyIdProvider';
import { PageRoot } from '../../components/root/PageRoot';
import { PageBody } from './PageBody';

type Props = {
    language: Language;
};

const Component: React.VFC<Props> = ({ language }) => (
    <CustomIntlProvider language={language}>
        <SelectedFlexboxPropertyIdProvider>
            <OpenedCodeViewerProvider>
                <PageRoot>
                    <PageBody />
                </PageRoot>
            </OpenedCodeViewerProvider>
        </SelectedFlexboxPropertyIdProvider>
    </CustomIntlProvider>
);

export const Page = Component;
