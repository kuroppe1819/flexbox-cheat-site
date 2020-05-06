import React, { ReactElement, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';
import { FlexItemContainer } from '../flex/FlexItemContainer';
import { ToggleCodeViewerState } from '../IndexContainer';

export const MainContents = (): ReactElement => {
    const { opened, setOpened } = useContext(ToggleCodeViewerState);
    console.log(opened);

    return (
        <Contents>
            <PropertySections>
                <div>
                    <section>
                        <PropertyName id="display" smooth to="/#display">
                            display
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer />
                            <FlexItemContainer />
                        </PropertyItems>
                    </section>
                    <section>
                        <PropertyName id="flex-direction" smooth to="/#flex-direction">
                            flex-direction
                        </PropertyName>
                        <PropertyItems>
                            <FlexItemContainer />
                            <FlexItemContainer />
                            <FlexItemContainer />
                            <FlexItemContainer />
                        </PropertyItems>
                    </section>
                </div>
            </PropertySections>
            <CodeViewerWrapper opened={opened}>
                <ToggleCodeViewer opened={opened} onClickHandler={(): void => setOpened(!opened)} />
                <CodeViewer language="css" code=".parent {}" />
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
