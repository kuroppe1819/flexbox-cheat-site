import React, { ReactElement, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';
import { FlexItemContainer } from '../flexboxItems/display/FlexItemContainer';
import { InlineFlexItemContainer } from '../flexboxItems/display/InlineFlexContainer';
import { MainContentsContext } from '../IndexContainer';
import { RowContainer } from '../flexboxItems/flexDirection/RowContainer';
import { RowReverseContainer } from '../flexboxItems/flexDirection/RowReverseContainer';
import { ColumnContainer } from '../flexboxItems/flexDirection/ColumnContainer';
import { ColumnReverseContainer } from '../flexboxItems/flexDirection/ColumnReverseContainer';
import { NoWrapContainer } from '../flexboxItems/flexWrap/NowrapContainer';
import { WrapContainer } from '../flexboxItems/flexWrap/WrapContainer';
import { WrapReverseContainer } from '../flexboxItems/flexWrap/WrapReverseContainer';
import { JCFlexStartContainer } from '../flexboxItems/justifyContent/JCFlexStartContainer';
import { JCFlexEndContainer } from '../flexboxItems/justifyContent/JCFlexEndContainer';
import { JCCenterContainer } from '../flexboxItems/justifyContent/JCCenterContainer';
import { JCSpaceAroundContainer } from '../flexboxItems/justifyContent/JCSpaceAround';
import { JCSpaceBetweenContainer } from '../flexboxItems/justifyContent/JCSpaceBetweenContainer';
import { JCSpaceEvenlyContainer } from '../flexboxItems/justifyContent/JCSpaceEvenlyContainer';
import { AIFlexStartContainer } from '../flexboxItems/alignItems/AIFlexStartContainer';
import { AIFlexEndContainer } from '../flexboxItems/alignItems/AIFlexEndContainer';
import { AICenterContainer } from '../flexboxItems/alignItems/AICenterContainer';
import { AIBaselineContainer } from '../flexboxItems/alignItems/AIBaselineContainer';
import { AIStretchContainer } from '../flexboxItems/alignItems/AIStretchContainer';

export const MainContents = (): ReactElement => {
    const { opened, setOpened, parentStyle, setParentStyle, copied, onCopy } = useContext(MainContentsContext);

    return (
        <Contents>
            <PropertySections>
                <PropertySection>
                    <PropertyName id="display" smooth to="/#display">
                        display
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                        <InlineFlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-direction" smooth to="/#flex-direction">
                        flex-direction
                    </PropertyName>
                    <PropertyItems>
                        <RowContainer setParentStyle={setParentStyle} />
                        <RowReverseContainer setParentStyle={setParentStyle} />
                        <ColumnContainer setParentStyle={setParentStyle} />
                        <ColumnReverseContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-wrap" smooth to="/#flex-wrap">
                        flex-wrap
                    </PropertyName>
                    <PropertyItems>
                        <NoWrapContainer setParentStyle={setParentStyle} />
                        <WrapContainer setParentStyle={setParentStyle} />
                        <WrapReverseContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="justify-content" smooth to="/#justify-content">
                        justify-content
                    </PropertyName>
                    <PropertyItems>
                        <JCFlexStartContainer setParentStyle={setParentStyle} />
                        <JCFlexEndContainer setParentStyle={setParentStyle} />
                        <JCCenterContainer setParentStyle={setParentStyle} />
                        <JCSpaceBetweenContainer setParentStyle={setParentStyle} />
                        <JCSpaceAroundContainer setParentStyle={setParentStyle} />
                        <JCSpaceEvenlyContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-items" smooth to="/#align-items">
                        align-items
                    </PropertyName>
                    <PropertyItems>
                        <AIFlexStartContainer setParentStyle={setParentStyle} />
                        <AIFlexEndContainer setParentStyle={setParentStyle} />
                        <AICenterContainer setParentStyle={setParentStyle} />
                        <AIBaselineContainer setParentStyle={setParentStyle} />
                        <AIStretchContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="order" smooth to="/#order">
                        order
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-self" smooth to="/#align-self">
                        align-self
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-content" smooth to="/#align-content">
                        align-content
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-grow" smooth to="/#flex-grow">
                        flex-grow
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-shrink" smooth to="/#flex-shrink">
                        flex-shrink
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <section>
                    <PropertyName id="flex-basis" smooth to="/#flex-basis">
                        flex-basis
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </section>
                <section>
                    <PropertyName id="others" smooth to="/#others">
                        others
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                        <FlexItemContainer setParentStyle={setParentStyle} />
                        <FlexItemContainer setParentStyle={setParentStyle} />
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </section>
            </PropertySections>
            <CodeViewerWrapper opened={opened}>
                <ToggleCodeViewer opened={opened} onClickHandler={(): void => setOpened(!opened)} />
                <CodeViewer language="css" code={parentStyle} copied={copied} onClickCopiedHandler={onCopy} />
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
    ${tw`px-5`}
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
