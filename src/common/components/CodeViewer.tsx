import React, { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export type Props = {
    language: string;
    code: string;
    copied: boolean;
    onClickCopiedHandler: () => void;
};

export const CodeViewer = (props: Props): ReactElement => {
    const { language, code, copied, onClickCopiedHandler } = props;

    return (
        <CodeView>
            <ViewHeader>
                <ViewHeaderTitle>{language}</ViewHeaderTitle>
                <CopyIcon icon={['fas', 'copy']} size="1x" onClick={onClickCopiedHandler} />
                {copied && <FeedbackCopiedText>Copied!</FeedbackCopiedText>}
            </ViewHeader>
            {code !== '' && (
                <CustomSyntaxHighlighter language={language} style={monoBlue}>
                    {code}
                </CustomSyntaxHighlighter>
            )}
        </CodeView>
    );
};

// TODO: heightは子要素の高さに合わせる
const CodeView = styled.div`
    ${tw`inline-block border border-solid border-gray-400`}
    width: 24rem;
`;

const ViewHeader = styled.div`
    ${tw`flex justify-start items-center`}
`;

const ViewHeaderTitle = styled.h6`
    ${tw`my-0 ml-2 px-2 text-blue-100 bg-blue-400 text-lg rounded-b-md leading-snug`}
`;

const CopyIcon = styled(FontAwesomeIcon)`
    ${tw`mx-3 text-gray-700 cursor-pointer`}
`;

const FeedbackCopiedText = styled.div`
    ${tw`text-sm font-medium -ml-2`}
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
    ${tw`m-3 bg-blue-400`}
`;
