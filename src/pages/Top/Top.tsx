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
import { LastChildToCornerCenterContainer } from '../../common/container/flexboxItems/others/LastChildCornerCenterContainer';
import { FirstChildToCornerContainer } from '../../common/container/flexboxItems/others/FirstChildToCornerContainer';
import { SpaceCenterContainer } from '../../common/container/flexboxItems/others/SpaceCenterContainer';
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

export const Top = (props: Props): ReactElement => {
    const { isOpenedCodeViewer, setOpenedCodeViewer } = props;

    return (
        <Contents>
            <PropertySections>
                <PropertySection>
                    <PropertyTitle id="display" smooth to="/#display">
                        <PropertyName>display</PropertyName>
                        <PropertyDescription>要素の表示形式</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <DisplayContainer propertyValue="flex" />
                        <DisplayContainer propertyValue="inline-flex" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="flex-direction" smooth to="/#flex-direction">
                        <PropertyName>flex-direction</PropertyName>
                        <PropertyDescription>子要素の並ぶ向き</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <FlexDirectionContainer propertyValue="row" />
                        <FlexDirectionContainer propertyValue="row-reverse" />
                        <FlexDirectionContainer propertyValue="column" />
                        <FlexDirectionContainer propertyValue="column-reverse" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="flex-wrap" smooth to="/#flex-wrap">
                        <PropertyName>flex-wrap</PropertyName>
                        <PropertyDescription>子要素の折り返し</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <FlexWrapContainer propertyValue="nowrap" />
                        <FlexWrapContainer propertyValue="wrap" />
                        <FlexWrapContainer propertyValue="wrap-reverse" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="justify-content" smooth to="/#justify-content">
                        <PropertyName>justify-content</PropertyName>
                        <PropertyDescription>水平方向の揃え方</PropertyDescription>
                    </PropertyTitle>
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
                    <PropertyTitle id="align-items" smooth to="/#align-items">
                        <PropertyName>align-items</PropertyName>
                        <PropertyDescription>垂直方向の揃え方</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <AlignItemsContainer propertyValue="flex-start" />
                        <AlignItemsContainer propertyValue="flex-end" />
                        <AlignItemsContainer propertyValue="center" />
                        <AlignItemsContainer propertyValue="baseline" />
                        <AlignItemsContainer propertyValue="stretch" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="align-content" smooth to="/#align-content">
                        <PropertyName>align-content</PropertyName>
                        <PropertyDescription>複数行のときの揃え方</PropertyDescription>
                    </PropertyTitle>
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
                    <PropertyTitle id="order" smooth to="/#order">
                        <PropertyName>order</PropertyName>
                        <PropertyDescription>順序の指定</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <OrderContainer propertyValue="-1" />
                        <OrderContainer propertyValue="0" />
                        <OrderContainer propertyValue="1" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="align-self" smooth to="/#align-self">
                        <PropertyName>align-self</PropertyName>
                        <PropertyDescription>子要素の垂直方向の揃え方</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <AlignSelfContainer propertyValue="flex-start" />
                        <AlignSelfContainer propertyValue="flex-end" />
                        <AlignSelfContainer propertyValue="center" />
                        <AlignSelfContainer propertyValue="baseline" />
                        <AlignSelfContainer propertyValue="stretch" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="flex-grow" smooth to="/#flex-grow">
                        <PropertyName>flex-grow</PropertyName>
                        <PropertyDescription>子要素の伸びる比率</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <FlexGrowContainer propertyValue="0" />
                        <FlexGrowContainer propertyValue="1" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="flex-shrink" smooth to="/#flex-shrink">
                        <PropertyName>flex-shrink</PropertyName>
                        <PropertyDescription>子要素の縮む比率</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <FlexShrinkContainer propertyValue="0" />
                        <FlexShrinkContainer propertyValue="1" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="flex-basis" smooth to="/#flex-basis">
                        <PropertyName>flex-basis</PropertyName>
                        <PropertyDescription>子要素の基本幅の指定</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <FlexBasisContainer propertyValue="30%" />
                        <FlexBasisContainer propertyValue="50%" />
                        <FlexBasisContainer propertyValue="content" />
                    </PropertyItems>
                </PropertySection>

                <PropertySection>
                    <PropertyTitle id="others" smooth to="/#others">
                        <PropertyName>others</PropertyName>
                        <PropertyDescription>その他レイアウト</PropertyDescription>
                    </PropertyTitle>
                    <PropertyItems>
                        <FirstChildToCornerContainer />
                        <SpaceCenterContainer />
                        <LastChildToCornerCenterContainer />
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

const PropertyTitle = styled(Link)`
    ${tw`block no-underline sticky top-0 bg-white outline-none mt-4 pt-3 z-10`}
    box-shadow: 0px 3px 3px -3px ${Color.gray400};
`;

const PropertyName = styled.h2`
    ${tw`block text-2xl text-blue-900 text-center m-0 font-normal`}
`;

const PropertyDescription = styled.h3`
    ${tw`block text-sm text-blue-900 leading-loose text-center m-0 pt-1 font-normal`}
`;

const PropertyItems = styled.div`
    ${tw`m-auto`}
`;

const CodeViewerWrapper = styled.div<{ isOpenedCodeViewer: boolean }>`
    ${tw`fixed z-20`}
    left: calc(50% + 216px);
    top: 10rem;

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
