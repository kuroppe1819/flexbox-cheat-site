import React, { ReactElement, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { CodeViewer } from '../common/components/CodeViewer';
import { ToggleCodeViewer } from '../common/components/ToggleCodeViewer';
import { FlexItemContainer } from '../flex/FlexItemContainer';

export const MainContents = (): ReactElement => {
    const [internalText, setInternalText] = useState<string>('');

    const handleChange = (event: any) => {
        setInternalText(event.target.value);
    };

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
            {/* <textarea onChange={handleChange} value={internalText}></textarea> */}
            <CodeViewerWrapper>
                <ToggleCodeViewer opened />
                <CodeViewer language="css" code={internalText} />
            </CodeViewerWrapper>
        </Contents>
    );
};

const Contents = styled.main`
    ${tw`flex`}
`;

const PropertySections = styled.div`
    ${tw`flex justify-center w-full ml-20`}
`;

const PropertyName = styled(Link)`
    ${tw`inline-block no-underline text-2xl text-blue-900 leading-loose mt-6`}
`;

const PropertyItems = styled.div`
    ${tw`flex flex-wrap`}
`;

const CodeViewerWrapper = styled.aside`
    ${tw`flex h-56 sticky`}
    top: 0.5rem;
`;
