import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewerContainer } from '../../common/container/common/CodeViewerContainer';
import { ToggleCodeViewer } from '../../common/components/ToggleCodeViewer';
import { AlignSelfContainer } from '../../common/container/flexboxItems/child/AlignSelfContainer';
import { FlexBasisContainer } from '../../common/container/flexboxItems/child/FlexBasisContainer';
import { FlexGrowContainer } from '../../common/container/flexboxItems/child/FlexGrowContainer';
import { FlexShrinkContainer } from '../../common/container/flexboxItems/child/FlexShrinkContainer';
import { OrderContainer } from '../../common/container/flexboxItems/child/OrderContainer';
import { FirstChildToCornerCenterContainer } from '../../common/container/flexboxItems/others/FirstChildCornerCenterContainer';
import { FirstChildToCornerContainer } from '../../common/container/flexboxItems/others/FirstChildToCornerContainer';
import { LastChildToCornerContainer } from '../../common/container/flexboxItems/others/LastChildToCornerContainer';
import { AlignContentContainer } from '../../common/container/flexboxItems/parent/AlignContentContainer';
import { AlignItemsContainer } from '../../common/container/flexboxItems/parent/AlignItemsContainer';
import { DisplayContainer } from '../../common/container/flexboxItems/parent/DisplayContainer';
import { FlexDirectionContainer } from '../../common/container/flexboxItems/parent/FlexDirectionContainer';
import { FlexWrapContainer } from '../../common/container/flexboxItems/parent/FlexWrapContainer';
import { JustifyContentContainer } from '../../common/container/flexboxItems/parent/JustifyContentContainer';
import { deviceMaxWidth, Color } from '../../common/util/DefineProperty';

type Props = {
    isOpenedCodeViewer: boolean;
    setOpenedCodeViewer: Dispatch<SetStateAction<boolean>>;
};

export const MainContents = (props: Props): ReactElement => {
    const { isOpenedCodeViewer, setOpenedCodeViewer } = props;

    return (
        <Contents>
            <PropertySections>
                <PropertySection>
                    <PropertyName id="display" smooth to="/#display">
                        display
                    </PropertyName>
                    <PropertyItems>
                        <DisplayContainer propertyValue="flex" />
                        <DisplayContainer propertyValue="inline-flex" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-direction" smooth to="/#flex-direction">
                        flex-direction
                    </PropertyName>
                    <PropertyItems>
                        <FlexDirectionContainer propertyValue="row" />
                        <FlexDirectionContainer propertyValue="row-reverse" />
                        <FlexDirectionContainer propertyValue="column" />
                        <FlexDirectionContainer propertyValue="column-reverse" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-wrap" smooth to="/#flex-wrap">
                        flex-wrap
                    </PropertyName>
                    <PropertyItems>
                        <FlexWrapContainer propertyValue="nowrap" />
                        <FlexWrapContainer propertyValue="wrap" />
                        <FlexWrapContainer propertyValue="wrap-reverse" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="justify-content" smooth to="/#justify-content">
                        justify-content
                    </PropertyName>
                    <PropertyItems>
                        <JustifyContentContainer propertyValue="flex-start" />
                        <JustifyContentContainer propertyValue="flex-end" />
                        <JustifyContentContainer propertyValue="center" />
                        <JustifyContentContainer propertyValue="space-between" />
                        <JustifyContentContainer propertyValue="space-around" />
                        <JustifyContentContainer propertyValue="space-evenly" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-items" smooth to="/#align-items">
                        align-items
                    </PropertyName>
                    <PropertyItems>
                        <AlignItemsContainer propertyValue="flex-start" />
                        <AlignItemsContainer propertyValue="flex-end" />
                        <AlignItemsContainer propertyValue="center" />
                        <AlignItemsContainer propertyValue="baseline" />
                        <AlignItemsContainer propertyValue="stretch" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-content" smooth to="/#align-content">
                        align-content
                    </PropertyName>
                    <PropertyItems>
                        <AlignContentContainer propertyValue="flex-start" />
                        <AlignContentContainer propertyValue="flex-end" />
                        <AlignContentContainer propertyValue="center" />
                        <AlignContentContainer propertyValue="space-between" />
                        <AlignContentContainer propertyValue="space-around" />
                        <AlignContentContainer propertyValue="space-evenly" />
                        <AlignContentContainer propertyValue="stretch" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="order" smooth to="/#order">
                        order
                    </PropertyName>
                    <PropertyItems>
                        <OrderContainer propertyValue="-1" />
                        <OrderContainer propertyValue="0" />
                        <OrderContainer propertyValue="1" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-self" smooth to="/#align-self">
                        align-self
                    </PropertyName>
                    <PropertyItems>
                        <AlignSelfContainer propertyValue="flex-start" />
                        <AlignSelfContainer propertyValue="flex-end" />
                        <AlignSelfContainer propertyValue="center" />
                        <AlignSelfContainer propertyValue="baseline" />
                        <AlignSelfContainer propertyValue="stretch" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-grow" smooth to="/#flex-grow">
                        flex-grow
                    </PropertyName>
                    <PropertyItems>
                        <FlexGrowContainer propertyValue="0" />
                        <FlexGrowContainer propertyValue="1" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-shrink" smooth to="/#flex-shrink">
                        flex-shrink
                    </PropertyName>
                    <PropertyItems>
                        <FlexShrinkContainer propertyValue="0" />
                        <FlexShrinkContainer propertyValue="1" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-basis" smooth to="/#flex-basis">
                        flex-basis
                    </PropertyName>
                    <PropertyItems>
                        <FlexBasisContainer propertyValue="30%" />
                        <FlexBasisContainer propertyValue="50%" />
                        <FlexBasisContainer propertyValue="content" />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="others" smooth to="/#others">
                        others
                    </PropertyName>
                    <PropertyItems>
                        <FirstChildToCornerContainer />
                        <LastChildToCornerContainer />
                        <FirstChildToCornerCenterContainer />
                    </PropertyItems>
                </PropertySection>
            </PropertySections>
            <CodeViewerWrapper isOpenedCodeViewer={isOpenedCodeViewer}>
                <ToggleCodeViewer opened={isOpenedCodeViewer} setOpened={setOpenedCodeViewer} />
                <CodeViewerContainer />
            </CodeViewerWrapper>
        </Contents>
    );
};

const Contents = styled.main`
    ${tw`flex mb-12 relative`}
    width: 880px;
    margin: 0 auto 3rem auto;
    right: 200px;

    @media ${deviceMaxWidth.laptop} {
        ${tw`mb-48 right-auto`}
    }

    @media ${deviceMaxWidth.tablet} {
        ${tw`w-auto mx-12`}
    }

    @media ${deviceMaxWidth.mobileL} {
        ${tw`mx-0 mb-32`}
    }
`;

const PropertySections = styled.div`
    ${tw`flex flex-wrap justify-center`}
`;

const PropertySection = styled.section`
    ${tw`px-3`}

    @media ${deviceMaxWidth.mobileL} {
        ${tw`px-1`}
    }
`;

const PropertyName = styled(Link)`
    ${tw`block no-underline text-2xl text-blue-900 leading-loose pt-2 mt-4 text-center sticky top-0 bg-white outline-none`}
    box-shadow: 0px 3px 3px -3px ${Color.gray400};
`;

const PropertyItems = styled.div`
    ${tw`m-auto`}
`;

const CodeViewerWrapper = styled.div<{ isOpenedCodeViewer: boolean }>`
    ${tw`fixed`}
    left: calc(50% + 216px);
    top: 9rem;

    @media ${deviceMaxWidth.laptop} {
        ${tw`flex items-end right-0 left-auto`}
        top: auto;
        bottom: 0.5rem;
        transform: ${(props): string => (props.isOpenedCodeViewer ? 'translateX(0)' : 'translateX(calc(24rem + 1px))')};
        transition: all 300ms 0s ease;
    }

    @media ${deviceMaxWidth.mobileL} {
        transform: ${(props): string =>
            props.isOpenedCodeViewer ? 'translateX(0)' : 'translateX(calc(100vw - 3rem + 1px))'};
    }
`;
