import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../../common/components/CodeViewer';
import { ToggleCodeViewer } from '../../common/components/ToggleCodeViewer';
import { deviceMaxWidth, ThemeColor } from '../../common/util/DefineProperty';
import { AlignSelfContainer } from '../../flexboxItems/child/AlignSelfContainer';
import { FlexBasisContainer } from '../../flexboxItems/child/FlexBasisContainer';
import { FlexGrowContainer } from '../../flexboxItems/child/FlexGrowContainer';
import { FlexShrinkContainer } from '../../flexboxItems/child/FlexShrinkContainer';
import { OrderContainer } from '../../flexboxItems/child/OrderContainer';
import { FirstChildToCornerCenterContainer } from '../../flexboxItems/others/FirstChildCornerCenterContainer';
import { FirstChildToCornerContainer } from '../../flexboxItems/others/FirstChildToCornerContainer';
import { LastChildToCornerContainer } from '../../flexboxItems/others/LastChildToCornerContainer';
import { AlignContentContainer } from '../../flexboxItems/parent/AlignContentContainer';
import { AlignItemsContainer } from '../../flexboxItems/parent/AlignItemsContainer';
import { DisplayContainer } from '../../flexboxItems/parent/DisplayContainer';
import { FlexDirectionContainer } from '../../flexboxItems/parent/FlexDirectionContainer';
import { FlexWrapContainer } from '../../flexboxItems/parent/FlexWrapContainer';
import { JustifyContentContainer } from '../../flexboxItems/parent/JustifyContentContainer';

type Props = {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
    flexboxItemsStyle: string;
    setFlexboxItemsStyle: Dispatch<SetStateAction<string>>;
    copied: boolean;
    onCopy: () => void;
    reference: string;
    setReference: Dispatch<SetStateAction<string>>;
};

export const MainContents = (props: Props): ReactElement => {
    const {
        opened,
        setOpened,
        flexboxItemsStyle,
        setFlexboxItemsStyle,
        copied,
        onCopy,
        reference,
        setReference,
    } = props;

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
                            setReference={setReference}
                        />
                        <DisplayContainer
                            propertyValue="inline-flex"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <FlexDirectionContainer
                            propertyValue="row-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <FlexDirectionContainer
                            propertyValue="column"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <FlexDirectionContainer
                            propertyValue="column-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <FlexWrapContainer
                            propertyValue="wrap"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <FlexWrapContainer
                            propertyValue="wrap-reverse"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <JustifyContentContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <JustifyContentContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <JustifyContentContainer
                            propertyValue="space-between"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <JustifyContentContainer
                            propertyValue="space-around"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <JustifyContentContainer
                            propertyValue="space-evenly"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <AlignItemsContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignItemsContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignItemsContainer
                            propertyValue="baseline"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignItemsContainer
                            propertyValue="stretch"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <AlignContentContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignContentContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignContentContainer
                            propertyValue="space-between"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignContentContainer
                            propertyValue="space-around"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignContentContainer
                            propertyValue="space-evenly"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignContentContainer
                            propertyValue="stretch"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <OrderContainer
                            propertyValue="0"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <OrderContainer
                            propertyValue="1"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <AlignSelfContainer
                            propertyValue="flex-end"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignSelfContainer
                            propertyValue="center"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignSelfContainer
                            propertyValue="baseline"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <AlignSelfContainer
                            propertyValue="stretch"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <FlexGrowContainer
                            propertyValue="1"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <FlexShrinkContainer
                            propertyValue="1"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <FlexBasisContainer
                            propertyValue="50%"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <FlexBasisContainer
                            propertyValue="content"
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
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
                            setReference={setReference}
                        />
                        <LastChildToCornerContainer
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                        <FirstChildToCornerCenterContainer
                            setFlexboxItemsStyle={setFlexboxItemsStyle}
                            setOpened={setOpened}
                            setReference={setReference}
                        />
                    </PropertyItems>
                </PropertySection>
            </PropertySections>
            <CodeViewerWrapper opened={opened}>
                <ToggleCodeViewer opened={opened} setOpened={setOpened} />
                <CodeViewer
                    language="css"
                    reference={reference}
                    code={flexboxItemsStyle}
                    copied={copied}
                    onClickCopiedHandler={onCopy}
                />
            </CodeViewerWrapper>
        </Contents>
    );
};

const Contents = styled.main`
    ${tw`flex mx-12 mb-12`}
    
    @media ${deviceMaxWidth.mobileL} {
        ${tw`mx-0`}
    }
`;

const PropertySections = styled.div`
    ${tw`flex flex-wrap justify-center`}
`;

const PropertySection = styled.section`
    ${tw`px-1`}
`;

const PropertyName = styled(Link)`
    ${tw`block no-underline text-2xl text-blue-900 leading-loose pt-2 mt-4 text-center sticky top-0 bg-white outline-none`}
    box-shadow: 0px 3px 3px -3px ${ThemeColor.shadow};
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
