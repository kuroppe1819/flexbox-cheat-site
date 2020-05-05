import React, { ReactElement } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FlexItemContainer } from '../flex/FlexItemContainer';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';

export const MainContents = (): ReactElement => {
    return (
        <Contents>
            <div>
                <PropertySection>
                    <PropertyName id="display" smooth to="/#display">
                        display
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer />
                        <FlexItemContainer />
                    </PropertyItems>
                </PropertySection>
                <PropertySection>
                    <PropertyName id="flex-direction" smooth to="/#flex-direction">
                        flex-direction
                    </PropertyName>
                    <PropertyItems>
                        <FlexItemContainer />
                        <FlexItemContainer />
                        <FlexItemContainer />
                    </PropertyItems>
                </PropertySection>
            </div>
            <CodeViewerWrapper>
                <CodeViewer headerTitle="CSS" code="Example CSS Code" />
                <ToggleCodeViewer opened />
            </CodeViewerWrapper>
        </Contents>
    );
};

const Contents = styled.main`
    ${tw`flex justify-center mx-20`}
`;

const PropertySection = styled.div`
    ${tw``}
`;

const PropertyName = styled(Link)`
    ${tw`inline-block no-underline text-2xl text-blue-900 leading-loose mt-6`}
`;

const PropertyItems = styled.div`
    ${tw`flex flex-wrap`}
`;

const CodeViewerWrapper = styled.div`
    ${tw`absolute`}
    right: 1rem;
`;
