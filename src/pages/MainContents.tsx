import React, { ReactElement, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';
import { FlexItemContainer } from '../flexboxItems/flex/FlexItemContainer';
import { InlineFlexItemContainer } from '../flexboxItems/flex/InlineFlexContainer';
import { MainContentsContext } from '../IndexContainer';

export const MainContents = (): ReactElement => {
    const { opened, setOpened, parentStyle, setParentStyle } = useContext(MainContentsContext);

    return (
        <Contents>
            <PropertySections>
                <div>
                    <section>
                        <PropertyName id="others" smooth to="/#others">
                            others
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="display" smooth to="/#display">
                            display
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                            <InlineFlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="flex-direction" smooth to="/#flex-direction">
                            flex-direction
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="flex-wrap" smooth to="/#flex-wrap">
                            flex-wrap
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="flex-flow" smooth to="/#flex-flow">
                            flex-flow
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="order" smooth to="/#order">
                            order
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="justify-content" smooth to="/#justify-content">
                            justify-content
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="align-items" smooth to="/#align-items">
                            align-items
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="align-self" smooth to="/#align-self">
                            align-self
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="align-content" smooth to="/#align-content">
                            align-content
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="flex-grow" smooth to="/#flex-grow">
                            flex-grow
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="flex-shrink" smooth to="/#flex-shrink">
                            flex-shrink
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="flex-basis" smooth to="/#flex-basis">
                            flex-basis
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer setParentStyle={setParentStyle} />
                        </PropertyItems>
                    </section>
                </div>
            </PropertySections>
            <CodeViewerWrapper opened={opened}>
                <ToggleCodeViewer opened={opened} onClickHandler={(): void => setOpened(!opened)} />
                <CodeViewer language="css" code={parentStyle} />
            </CodeViewerWrapper>
        </Contents>
    );
};

const Contents = styled.main`
    ${tw`flex`}
`;

const PropertySections = styled.div`
    ${tw`flex w-full ml-20`}
`;

const PropertyName = styled(Link)`
    ${tw`inline-block no-underline text-2xl text-blue-900 leading-loose mt-6`}
`;

const PropertyItems = styled.div`
    ${tw`flex flex-wrap`}
`;

// transform: translateX(24rem);
const CodeViewerWrapper = styled.div<{ opened: boolean }>`
    ${tw`flex sticky h-56`}
    top: 0.5rem;
    transform: ${(props): any => (props.opened ? 'translateX(0)' : 'translateX(24rem)')};
    margin-left: ${(props): any => (props.opened ? '0' : '-24rem')};
    transition: all 300ms 0s ease;
`;
