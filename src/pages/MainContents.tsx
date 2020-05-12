import React, { ReactElement, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';
import { MainContentsContext } from '../IndexContainer';
import { DisplayContainer } from '../flexboxItems/DisplayContainer';
import { FlexDirectionContainer } from '../flexboxItems/FlexDirectionContainer';
import { FlexWrapContainer } from '../flexboxItems/FlexWrapContainer';
import { JustifyContentContainer } from '../flexboxItems/JustifyContentContainer';
import { AlignItemsContainer } from '../flexboxItems/AlignItemsContainer';
import { AlignContentContainer } from '../flexboxItems/AlignContentContainer';
import { OrderContainer } from '../flexboxItems/OrderContainer';
import { AlignSelfContainer } from '../flexboxItems/alignSelfContainer';

export const MainContents = (): ReactElement => {
    const { opened, setOpened, flexboxItemsStyle, setFlexboxItemsStyle, copied, onCopy } = useContext(
        MainContentsContext
    );

    return (
        <Contents>
            <PropertySections>
                <PropertySection>
                    <PropertyName id="display" smooth to="/#display">
                        display
                    </PropertyName>
                    <PropertyItems>
                        <DisplayContainer propertyValue="flex" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <DisplayContainer propertyValue="inline-flex" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-direction" smooth to="/#flex-direction">
                        flex-direction
                    </PropertyName>
                    <PropertyItems>
                        <FlexDirectionContainer propertyValue="row" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <FlexDirectionContainer
                            propertyValue="row-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                        <FlexDirectionContainer propertyValue="column" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <FlexDirectionContainer
                            propertyValue="column-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-wrap" smooth to="/#flex-wrap">
                        flex-wrap
                    </PropertyName>
                    <PropertyItems>
                        <FlexWrapContainer propertyValue="nowrap" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <FlexWrapContainer propertyValue="wrap" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <FlexWrapContainer propertyValue="wrap-reverse" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="justify-content" smooth to="/#justify-content">
                        justify-content
                    </PropertyName>
                    <PropertyItems>
                        <JustifyContentContainer
                            propertyValue="flex-start"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                        <JustifyContentContainer propertyValue="flex-end" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <JustifyContentContainer propertyValue="center" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <JustifyContentContainer
                            propertyValue="space-between"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                        <JustifyContentContainer
                            propertyValue="space-around"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                        <JustifyContentContainer
                            propertyValue="space-evenly"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-items" smooth to="/#align-items">
                        align-items
                    </PropertyName>
                    <PropertyItems>
                        <AlignItemsContainer propertyValue="flex-start" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignItemsContainer propertyValue="flex-end" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignItemsContainer propertyValue="center" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignItemsContainer propertyValue="baseline" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignItemsContainer propertyValue="stretch" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-content" smooth to="/#align-content">
                        align-content
                    </PropertyName>
                    <PropertyItems>
                        <AlignContentContainer propertyValue="flex-start" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignContentContainer propertyValue="flex-end" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignContentContainer propertyValue="center" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignContentContainer
                            propertyValue="space-between"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                        <AlignContentContainer
                            propertyValue="space-around"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                        <AlignContentContainer
                            propertyValue="space-evenly"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                        />
                        <AlignContentContainer propertyValue="stretch" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="order" smooth to="/#order">
                        order
                    </PropertyName>
                    <PropertyItems>
                        <OrderContainer propertyValue="-1" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <OrderContainer propertyValue="0" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <OrderContainer propertyValue="1" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-self" smooth to="/#align-self">
                        align-self
                    </PropertyName>
                    <PropertyItems>
                        <AlignSelfContainer propertyValue="flex-start" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignSelfContainer propertyValue="flex-end" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignSelfContainer propertyValue="center" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignSelfContainer propertyValue="baseline" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                        <AlignSelfContainer propertyValue="stretch" setFlexboxItemsStyle={setFlexboxItemsStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-grow" smooth to="/#flex-grow">
                        flex-grow
                    </PropertyName>
                    <PropertyItems></PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-shrink" smooth to="/#flex-shrink">
                        flex-shrink
                    </PropertyName>
                    <PropertyItems></PropertyItems>
                </PropertySection>
                <section>
                    <PropertyName id="flex-basis" smooth to="/#flex-basis">
                        flex-basis
                    </PropertyName>
                    <PropertyItems></PropertyItems>
                </section>
                <section>
                    <PropertyName id="others" smooth to="/#others">
                        others
                    </PropertyName>
                    <PropertyItems></PropertyItems>
                </section>
            </PropertySections>
            <CodeViewerWrapper opened={opened}>
                <ToggleCodeViewer opened={opened} onClickHandler={(): void => setOpened(!opened)} />
                <CodeViewer language="css" code={flexboxItemsStyle} copied={copied} onClickCopiedHandler={onCopy} />
            </CodeViewerWrapper>
        </Contents>
    );
};

const Contents = styled.main`
    ${tw`flex mx-12`}
`;

const PropertySections = styled.div`
    ${tw`flex flex-wrap justify-center`}
`;

const PropertySection = styled.section`
    ${tw`px-4`}
`;

const PropertyName = styled(Link)`
    ${tw`inline-block no-underline text-2xl text-blue-900 leading-loose mt-6 ml-3`}
`;

const PropertyItems = styled.div`
    ${tw``}
`;

const CodeViewerWrapper = styled.div<{ opened: boolean }>`
    ${tw`flex items-end fixed`}
    bottom: 0.5rem;
    right: 0;
    transform: ${(props): string => (props.opened ? 'translateX(0)' : 'translateX(20rem)')};
    margin-left: ${(props): string => (props.opened ? '0' : '-20rem')};
    transition: all 300ms 0s ease;
`;
