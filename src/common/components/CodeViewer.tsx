import React, { ReactElement } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { deviceMaxWidth } from '../util/DefineProperty';

export type Props = {
    language: string;
    code: string;
    reference: string;
    copied: boolean;
    onClickCopiedHandler: () => void;
};

export const CodeViewer = (props: Props): ReactElement => {
    const { language, code, reference, copied, onClickCopiedHandler } = props;

    return (
        <CodeView>
            <ViewHeader>
                <CSSViewButton>CSS</CSSViewButton>
                <HTMLViewButton>HTML</HTMLViewButton>
                {reference !== '' && (
                    <ExternalLink href={reference} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['far', 'window-restore']} size="lg" />
                    </ExternalLink>
                )}
                {code !== '' && <CopyIcon icon={['fas', 'copy']} size="lg" onClick={onClickCopiedHandler} />}
                {copied && <FeedbackCopiedText>Copied!</FeedbackCopiedText>}
            </ViewHeader>
            <CustomSyntaxHighlighter language={language} style={monoBlue}>
                {code}
            </CustomSyntaxHighlighter>
        </CodeView>
    );
};

const CodeView = styled.div`
    ${tw`inline-block border border-solid border-gray-400 bg-white h-full rounded-tl-md shadow-md`}
    width: 24rem;
    min-height: 7.5rem;

    @media ${deviceMaxWidth.mobileL} {
        width: calc(100vw - 3rem);
    }
`;

const ViewHeader = styled.div`
    ${tw`flex justify-start items-center m-3`}
`;

const CSSViewButton = styled.button`
    ${tw`pt-1 text-blue-100 bg-blue-400 text-base rounded-l-md leading-snug border-solid border-blue-400 outline-none cursor-pointer`}
`;

const HTMLViewButton = styled.button`
    ${tw`pt-1 text-blue-900 bg-white text-base rounded-r-md leading-snug border-solid border-gray-400 outline-none cursor-pointer`}
`;

const ExternalLink = styled.a`
    ${tw`inline-block ml-2 text-gray-700 hover:text-blue-400 p-1`};
`;

const CopyIcon = styled(FontAwesomeIcon)`
    ${tw`ml-1 p-1 text-gray-700 cursor-pointer hover:text-blue-400`}
`;

const FeedbackCopiedText = styled.div`
    ${tw`text-base ml-1`}
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
    ${tw`m-3 bg-blue-400`}
    min-height: 3rem;
    height: 15rem;

    @media ${deviceMaxWidth.laptop} {
        ${tw`h-auto`}
    }

    @media ${deviceMaxWidth.mobileL} {
        ${tw`h-32`}
    }
`;
