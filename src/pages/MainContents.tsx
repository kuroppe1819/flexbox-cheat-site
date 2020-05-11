import React, { ReactElement, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';
import { FlexItemContainer } from '../flexboxItems/flex/FlexItemContainer';
import { InlineFlexItemContainer } from '../flexboxItems/flex/InlineFlexContainer';
import { MainContentsContext } from '../IndexContainer';
import { RowContainer } from '../flexboxItems/flexDirection/RowContainer';
import { RowReverseContainer } from '../flexboxItems/flexDirection/RowReverseContainer';
import { ColumnContainer } from '../flexboxItems/flexDirection/ColumnContainer';
import { ColumnReverseContainer } from '../flexboxItems/flexDirection/ColumnReverseContainer';
import { NoWrapContainer } from '../flexboxItems/flexWrap/NowrapContainer';
import { WrapContainer } from '../flexboxItems/flexWrap/WrapContainer';
import { WrapReverseContainer } from '../flexboxItems/flexWrap/WrapReverseContainer';

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
                    <PropertyName id="flex-flow" smooth to="/#flex-flow">
                        flex-flow
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
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
                    <PropertyName id="justify-content" smooth to="/#justify-content">
                        justify-content
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer setParentStyle={setParentStyle} />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="align-items" smooth to="/#align-items">
                        align-items
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
    ${tw`flex`}
`;

const PropertySections = styled.div`
    ${tw`flex flex-wrap w-full ml-20`}
`;

const PropertySection = styled.section`
    ${tw`px-6`}
`;

const PropertyName = styled(Link)`
    ${tw`inline-block no-underline text-2xl text-blue-900 leading-loose mt-6 ml-3`}
`;

const PropertyItems = styled.div`
    ${tw`flex flex-wrap`}
`;

const CodeViewerWrapper = styled.div<{ opened: boolean }>`
    ${tw`flex sticky h-56`}
    top: 0.5rem;
    transform: ${(props): string => (props.opened ? 'translateX(0)' : 'translateX(24rem)')};
    margin-left: ${(props): string => (props.opened ? '0' : '-24rem')};
    transition: all 300ms 0s ease;
`;
