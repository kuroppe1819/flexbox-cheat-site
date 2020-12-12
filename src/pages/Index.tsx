import React, { Dispatch, SetStateAction, useState } from 'react';
import { IntlProvider } from 'react-intl';
import styled from 'styled-components';
import { FlexboxGroup } from '../components/index/flexbox/FlexboxGroup';
import { PageRoot } from '../components/root/PageRoot';
import { CodeViewer } from '../components/index/codeViewer/CodeViewer';
import { FlexboxProperty } from '../data/flexboxProperties';
import { messages } from '../data/messages';
import { getFlexboxProperties } from '../fixtures/functions/dataProvider';
import { Language } from '../fixtures/functions/language';
import { deviceMaxWidth } from '../data/deviceSize';

type Props = {
    isOpenSourceCodeViewer: boolean;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className } = props;
    return (
        <PageRoot>
            <main className={`${className}`}>
                <div className={`${className}__flexboxGroupWrapper`}>
                    {getFlexboxProperties().map((property: FlexboxProperty) => (
                        <FlexboxGroup
                            key={property.name}
                            appendClassName={className}
                            propertyName={property.name}
                            propertyInfoList={property.infoList}
                        />
                    ))}
                </div>
                <div className={`${className}__sourceCodeViewerWrapper`}>
                    <CodeViewer />
                </div>
            </main>
        </PageRoot>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: flex;
    position: relative;
    width: 880px;
    right: 200px;
    margin: 1rem auto 3rem auto;

    @media ${deviceMaxWidth.laptop} {
        right: auto;
    }

    @media ${deviceMaxWidth.tablet} {
        width: auto;
    }

    @media ${deviceMaxWidth.mobileL} {
        margin-right: 0;
        margin-left: 0;
    }

    &__flexboxGroupWrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &:after {
            content: '';
            width: 194px;
            height: 0;
        }
    }

    &__flexboxGroup {
        padding: 0 0.75rem;
        justify-content: flex-start;

        @media ${deviceMaxWidth.mobileL} {
            padding: 0 0.25rem;
        }
    }

    &__sourceCodeViewerWrapper {
        position: fixed;
        left: calc(50% + 216px);
        top: 10rem;
        z-index: 20;

        @media ${deviceMaxWidth.laptop} {
            display: flex;
            align-items: flex-end;
            top: auto;
            right: 0;
            left: auto;
            bottom: 0.5rem;
            transform: ${({ isOpenSourceCodeViewer }) =>
                isOpenSourceCodeViewer ? 'translateX(0)' : 'translateX(calc(24rem + 1px))'};
            transition: all 300ms 0s ease;
        }

        @media ${deviceMaxWidth.mobileL} {
            transform: ${({ isOpenSourceCodeViewer }): string =>
                isOpenSourceCodeViewer ? 'translateX(0)' : 'translateX(calc(100vw - 3rem + 1px))'};
        }
    }
`;

export type IndexContextProps = {
    language: Language;
    isOpenSourceCodeViewer: boolean;
    selectedFlexboxPropertyId: string | null;
    mouseOverFlexboxListItemId: string | null;
    setLanguage: Dispatch<SetStateAction<Language>>;
    setOpenSourceCodeViewer: Dispatch<SetStateAction<boolean>>;
    setFlexboxPropertyId: Dispatch<SetStateAction<string | null>>;
    setMouseOverFlexboxListItemId: Dispatch<SetStateAction<string | null>>;
};

export const IndexContext = React.createContext({} as IndexContextProps);

const Container: React.FC = () => {
    const [language, setLanguage] = useState<Language>('ja');
    const [isOpenSourceCodeViewer, setOpenSourceCodeViewer] = useState(false);
    const [selectedFlexboxPropertyId, setFlexboxPropertyId] = useState<string | null>(null);
    const [mouseOverFlexboxListItemId, setMouseOverFlexboxListItemId] = useState<string | null>(null);

    return (
        <IntlProvider locale={language} messages={messages[language]}>
            <IndexContext.Provider
                value={{
                    language,
                    isOpenSourceCodeViewer,
                    selectedFlexboxPropertyId,
                    mouseOverFlexboxListItemId,
                    setLanguage,
                    setOpenSourceCodeViewer,
                    setFlexboxPropertyId,
                    setMouseOverFlexboxListItemId,
                }}
            >
                <StyledComponent isOpenSourceCodeViewer={isOpenSourceCodeViewer} />
            </IndexContext.Provider>
        </IntlProvider>
    );
};

export const Index = Container;
