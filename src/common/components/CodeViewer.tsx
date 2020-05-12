import React, { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export type Props = {
    language: string;
    code: string;
    href?: string;
    copied: boolean;
    onClickCopiedHandler: () => void;
};

export const CodeViewer = (props: Props): ReactElement => {
    const { language, code, href, copied, onClickCopiedHandler } = props;

    return (
        <CodeView>
            <ViewHeader>
                <ViewHeaderTitle>{language}</ViewHeaderTitle>
                {href && (
                    <ExternalLink href={href} target="_blank">
                        <FontAwesomeIcon icon={['far', 'window-restore']} size="1x" />
                    </ExternalLink>
                )}
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

const CodeView = styled.div`
    ${tw`inline-block border border-solid border-gray-400 bg-white h-full rounded-tl-md shadow-md`}
    width: 20rem;
    min-height: 7.5rem;
`;

const ViewHeader = styled.div`
    ${tw`flex justify-start items-center`}
`;

const ViewHeaderTitle = styled.h6`
    ${tw`my-0 ml-2 px-2 text-blue-100 bg-blue-400 text-lg rounded-b-md leading-snug`}
`;

const ExternalLink = styled.a`
    ${tw`inline-block ml-3 text-gray-700`};
`;

const CopyIcon = styled(FontAwesomeIcon)`
    ${tw`ml-3 text-gray-700 cursor-pointer`}
`;

const FeedbackCopiedText = styled.div`
    ${tw`text-sm font-medium ml-1`}
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
    ${tw`m-3 bg-blue-400`}
`;
