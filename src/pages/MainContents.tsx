import React, { ReactElement, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';
import { MainContentsContext } from '../IndexContainer';
import { DisplayContainer } from '../flexboxItems/parent/DisplayContainer';
import { FlexDirectionContainer } from '../flexboxItems/parent/FlexDirectionContainer';
import { FlexWrapContainer } from '../flexboxItems/parent/FlexWrapContainer';
import { JustifyContentContainer } from '../flexboxItems/parent/JustifyContentContainer';
import { AlignItemsContainer } from '../flexboxItems/parent/AlignItemsContainer';
import { AlignContentContainer } from '../flexboxItems/parent/AlignContentContainer';
import { OrderContainer } from '../flexboxItems/child/OrderContainer';
import { AlignSelfContainer } from '../flexboxItems/child/AlignSelfContainer';
import { FlexGrowContainer } from '../flexboxItems/child/FlexGrowContainer';
import { FlexShrinkContainer } from '../flexboxItems/child/FlexShrinkContainer';
import { FlexBasisContainer } from '../flexboxItems/child/FlexBasisContainer';
import { FirstChildToCornerContainer } from '../flexboxItems/others/FirstChildToCornerContainer';
import { LastChildToCornerContainer } from '../flexboxItems/others/LastChildToCornerContainer';
import { FirstChildToCornerCenterContainer } from '../flexboxItems/others/FirstChildCornerCenterContainer';

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
                        <DisplayContainer
                            propertyValue="flex"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <DisplayContainer
                            propertyValue="inline-flex"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-direction" smooth to="/#flex-direction">
                        flex-direction
                    </PropertyName>
                    <PropertyItems>
                        <FlexDirectionContainer
                            propertyValue="row"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexDirectionContainer
                            propertyValue="row-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexDirectionContainer
                            propertyValue="column"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexDirectionContainer
                            propertyValue="column-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-wrap" smooth to="/#flex-wrap">
                        flex-wrap
                    </PropertyName>
                    <PropertyItems>
                        <FlexWrapContainer
                            propertyValue="nowrap"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexWrapContainer
                            propertyValue="wrap"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexWrapContainer
                            propertyValue="wrap-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
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
                            setOpened={setOpened}
                        />
                        <JustifyContentContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <JustifyContentContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <JustifyContentContainer
                            propertyValue="space-between"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <JustifyContentContainer
                            propertyValue="space-around"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <JustifyContentContainer
                            propertyValue="space-evenly"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-items" smooth to="/#align-items">
                        align-items
                    </PropertyName>
                    <PropertyItems>
                        <AlignItemsContainer
                            propertyValue="flex-start"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignItemsContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignItemsContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignItemsContainer
                            propertyValue="baseline"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignItemsContainer
                            propertyValue="stretch"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-content" smooth to="/#align-content">
                        align-content
                    </PropertyName>
                    <PropertyItems>
                        <AlignContentContainer
                            propertyValue="flex-start"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignContentContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignContentContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignContentContainer
                            propertyValue="space-between"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignContentContainer
                            propertyValue="space-around"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignContentContainer
                            propertyValue="space-evenly"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignContentContainer
                            propertyValue="stretch"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="order" smooth to="/#order">
                        order
                    </PropertyName>
                    <PropertyItems>
                        <OrderContainer
                            propertyValue="-1"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <OrderContainer
                            propertyValue="0"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <OrderContainer
                            propertyValue="1"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-self" smooth to="/#align-self">
                        align-self
                    </PropertyName>
                    <PropertyItems>
                        <AlignSelfContainer
                            propertyValue="flex-start"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignSelfContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignSelfContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignSelfContainer
                            propertyValue="baseline"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <AlignSelfContainer
                            propertyValue="stretch"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-grow" smooth to="/#flex-grow">
                        flex-grow
                    </PropertyName>
                    <PropertyItems>
                        <FlexGrowContainer
                            propertyValue="0"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexGrowContainer
                            propertyValue="1"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-shrink" smooth to="/#flex-shrink">
                        flex-shrink
                    </PropertyName>
                    <PropertyItems>
                        <FlexShrinkContainer
                            propertyValue="0"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexShrinkContainer
                            propertyValue="1"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-basis" smooth to="/#flex-basis">
                        flex-basis
                    </PropertyName>
                    <PropertyItems>
                        <FlexBasisContainer
                            propertyValue="30%"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexBasisContainer
                            propertyValue="50%"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <FlexBasisContainer
                            propertyValue="content"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="others" smooth to="/#others">
                        others
                    </PropertyName>
                    <PropertyItems>
                        <FirstChildToCornerContainer
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                        <LastChildToCornerContainer setFlexboxItemsStyle={setFlexboxItemsStyle} setOpened={setOpened} />
                        <FirstChildToCornerCenterContainer
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                        />
                    </PropertyItems>
                </PropertySection>
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
    ${tw`px-3`}
`;

const PropertyName = styled(Link)`
    ${tw`block no-underline text-2xl text-blue-900 leading-loose pt-2 mt-4 text-center sticky top-0 bg-white`}
    box-shadow: 0px 3px 3px -3px #cbd5e0;
`;

const PropertyItems = styled.div`
    ${tw`m-auto`}
`;

const CodeViewerWrapper = styled.div<{ opened: boolean }>`
    ${tw`flex items-end fixed`}
    bottom: 0.5rem;
    right: 0;
    transform: ${(props): string => (props.opened ? 'translateX(0)' : 'translateX(calc(24rem + 1px))')};
    margin-left: ${(props): string => (props.opened ? '0' : '-24rem')};
    transition: all 300ms 0s ease;
`;
