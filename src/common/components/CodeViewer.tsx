import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type Props = {
    headerTitle: string;
    code: string;
};

export const CodeViewer = (props: Props): ReactElement => {
    const { code, headerTitle } = props;

    return (
        <CodeView>
            <ViewHeader>
                <ViewHeaderTitle>{headerTitle}</ViewHeaderTitle>
                <CopyIcon icon={['fas', 'copy']} size="1x" />
            </ViewHeader>
            <TextView>{code}</TextView>
        </CodeView>
    );
};

// TODO: heightは子要素の高さに合わせる
const CodeView = styled.div`
    ${tw`inline-block h-64 border border-solid border-gray-400 ml-3`}
    width: 24rem;
`;

const ViewHeader = styled.div`
    ${tw`flex justify-between items-center`}
`;

const ViewHeaderTitle = styled.h6`
    ${tw`my-0 ml-2 px-3 text-blue-100 bg-blue-400 text-lg rounded-b-md leading-relaxed`}
`;

const CopyIcon = styled(FontAwesomeIcon)`
    ${tw`mx-3 text-gray-700 cursor-pointer`}
`;

const TextView = styled.div`
    ${tw`m-3`}
`;
